import mongoose from "mongoose";
const url = "mongodb://localhost:27017/database";
export const connect = async ()=> {
    return await mongoose.connect(url)
}
