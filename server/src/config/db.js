import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongiDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1); //exist process if DB fails
    }
};

export default connectDB;