import mongoose from "mongoose";
import { userSchema } from "./user.model";
const schema = mongoose.Schema;
export const jobSchema = new schema({
  userId: {
    type: schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
  jobId: {
    type: schema.Types.ObjectId,
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  qualification: { type: String, required: true },
  preferredQualifications: { type: String, requred: false },
  responsibility: { type: String, required: true },
  salary: { type: String, required: false },
  category: {
    type: String,
    enum: ["Full time", "Part time", "Internship", "Contract"],
    required: false,
  },
});
