import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  // If using a custom endpoint like Railway/Cloudflare/DigitalOcean
  ...(process.env.AWS_ENDPOINT ? { endpoint: process.env.AWS_ENDPOINT } : {}),
  forcePathStyle: true, // Often needed for custom S3 providers
});

export async function uploadToS3(file: Buffer, fileName: string, contentType: string) {
  const bucketName = process.env.AWS_S3_BUCKET_NAME!;
  
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ContentType: contentType,
    ACL: "public-read", // Ensures the uploaded file is publicly readable
  });

  await s3Client.send(command);

  // Return the URL. If using a custom endpoint, construct it accordingly.
  if (process.env.AWS_ENDPOINT) {
    return `${process.env.AWS_ENDPOINT}/${bucketName}/${fileName}`;
  }
  
  return `https://${bucketName}.s3.${process.env.AWS_REGION || "us-east-1"}.amazonaws.com/${fileName}`;
}

export async function deleteFromS3(fileName: string) {
  const bucketName = process.env.AWS_S3_BUCKET_NAME!;
  
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: fileName,
  });

  await s3Client.send(command);
}
