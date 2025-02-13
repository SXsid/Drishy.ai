import { z } from "zod";

export const TrainModel = z.object({
  name: z.string(),
  type: z.enum(["Man", "Female", "Others"]),
  age: z.number(),
  ethinicity: z.enum([
    "AsianAmerican",
    "White",
    "SouthAsian",
    "EastAsian",
    "Black",
    "Pacific",
  ]),
  eyeColor: z.enum(["Black", "Green", "Blue", "Gray", "Brown"]),
  images: z.array(z.string()),
});

export const generateImage = z.object({
  prompt: z.string(),
  modelId: z.string(),
  numOfImages: z.number(),
});

export const generateImagesFromPack = z.object({
  modelId: z.string(),
  packId: z.string(),
});

export type TrainModelType = z.infer<typeof TrainModel>;
