import mongoose, { Schema, model, models } from "mongoose";

export interface IDynamicImage {
  sectionId: string;
  imageUrl: string;
  updatedAt: Date;
}

const DynamicImageSchema = new Schema<IDynamicImage>({
  sectionId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

const DynamicImage = models.DynamicImage || model<IDynamicImage>("DynamicImage", DynamicImageSchema);

export default DynamicImage;
