import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://anurag:anurag@cluster0.98ugl.mongodb.net/food-del')
    .then(()=>{
        console.log("DB Connected");
    });
};