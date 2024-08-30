import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anurag:anurag@cluster0.98ugl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log(`Database connected`);
    })
    .catch((err) => console.log(err));
};
