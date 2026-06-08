import mongoose from "mongoose";

export const connectDB = async () => {
        console.log("URI:", process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {  
        console.log("Error in connecting to MongoDB", error);
        process.exit(1); //1 means failure
    }
}