import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import router from './routes/index.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mongoUrl = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.1cstu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}))
app.use('/api', router);

// Обработка ошибок, последний мидваре

const start = async () => {
    try {
        await mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start()