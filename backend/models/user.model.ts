import mongoose from "mongoose";
const schema = mongoose.Schema;
//We can use interface to make more smart
export const userSchema = new schema({
  userId: {
    type: schema.Types.ObjectId,
    required: true,
  },

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, requred: true },
  title: { type: String, required: true },
  residence: { type: String, required: true },
  resumeLink: { type: String, required: true },
  gender: { type: String, required: false },
  birthDate: { type: Date, required: false },
  about: { type: String, required: false },
});