import mongo from 'mongoose';
import "dotenv/config";

const connectDB = async () => {
    try{
        const client = await mongo.connect(process.env.MONGO_URI)
        console.log("Database connected successfully")
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export  default connectDB;