import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {

    // const MONGODB_URI = "mongodb://127.0.0.1:27017/completeDB";
    const MONGODB_URI_MAIN = process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI_MAIN, { useNewUrlParser: true });
    
    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;