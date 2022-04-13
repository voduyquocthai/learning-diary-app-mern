require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@diary-app.icfrh.mongodb.net/diary-app?retryWrites=true&w=majority`,{
        });
        console.log('Mongo connected');
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

connectDB();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));