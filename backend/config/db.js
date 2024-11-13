import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://chiragkumawat457:33858627@cluster0.bqkrl.mongodb.net/food-del').then(()=>console.log("DB Connected..."));
}