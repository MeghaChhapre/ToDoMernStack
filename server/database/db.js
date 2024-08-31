import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://Todo:5NnR4PogEMVplcxa@ac-4q0ysu9-shard-00-00.zk50en4.mongodb.net:27017,ac-4q0ysu9-shard-00-01.zk50en4.mongodb.net:27017,ac-4q0ysu9-shard-00-02.zk50en4.mongodb.net:27017/?ssl=true&replicaSet=atlas-shgsdi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=TechCirrus`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

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