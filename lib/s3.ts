import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

export const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  ...(process.env.AWS_ENDPOINT ? { endpoint: process.env.AWS_ENDPOINT } : {}),
  forcePathStyle: true,
});

export async function uploadToS3(file: Buffer, fileName: string, contentType: string) {
  const bucketName = process.env.AWS_S3_BUCKET_NAME!;
  
  // Optimize image with Sharp
  const optimizedBuffer = await sharp(file)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  // Sanitize filename: remove spaces and special chars, and ensure it ends with .webp
  const sanitizedBase = fileName
    .replace(/\s+/g, "-")
    .replace(/\.[^/.]+$/, "");
  const webpFileName = `${sanitizedBase}.webp`;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: webpFileName,
    Body: optimizedBuffer,
    ContentType: "image/webp",
    // We can still use public-read if we want, but proxying makes it unnecessary
    ACL: "public-read",
  });

  await s3Client.send(command);

  // Return the Proxy URL instead of the direct S3 URL
  return `/api/images/${webpFileName}`;
}

export async function deleteFromS3(fileNameOrUrl: string) {
  const bucketName = process.env.AWS_S3_BUCKET_NAME!;
  
  // Extract key if it's a proxy URL (e.g., /api/images/dynamic/xyz.webp)
  const key = fileNameOrUrl.startsWith('/api/images/') 
    ? fileNameOrUrl.replace('/api/images/', '') 
    : fileNameOrUrl;
  
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: key,
  });

  await s3Client.send(command);
}
