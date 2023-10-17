import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const password = process.env.MONGODB_PASSWORD;
const userName = process.env.MONGODB_USERNAME;
const url = `mongodb+srv://${userName}:${password}@db1.edkoj9z.mongodb.net/?retryWrites=true&w=majority`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(url,options);

const db = mongoose.connection;


export default db;