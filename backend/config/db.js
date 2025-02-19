import mongoose from "mongoose";

 export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://seven:9816814887@cluster0.lfcgi.mongodb.net/foodies').then(()=> console.log("Database Connected"));
}