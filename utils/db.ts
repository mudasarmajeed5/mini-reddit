import mongoose from "mongoose";

export async function connectDB() {
    if(mongoose.connection.readyState){
        console.log("MongoDB Connected\n Returning...\n");
        return;
    }
    if (!process.env.MONGODB_URI) {
        console.log("MONGODB_URI not configured");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log((error as Error).message)
    }
}