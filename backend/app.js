// Import môi trường và các module cần thiết
import { configDotenv } from 'dotenv';
configDotenv(); // Load biến môi trường từ tệp .env

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectToDb from './config/db.config.js'; // Hàm kết nối MongoDB
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscellaneousRoutes from './routes/miscellaneous.routes.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
  cors({
    origin: ['http://localhost:5173'], // Whitelist domains
    credentials: true, // Allow cookies và thông tin xác thực
  })
);

// Kết nối đến MongoDB Atlas
connectToDb(); // Kết nối database

// Định tuyến (routes)
app.use('/user', userRoutes);
app.use('/courses', courseRoutes);
app.use('/payments', paymentRoutes);
app.use('/', miscellaneousRoutes);

// Xử lý lỗi 404
app.all('*', (req, res) => {
  res.status(404).send('OOPS!! 404 page not found');
});

// Middleware xử lý lỗi tùy chỉnh
app.use(errorMiddleware);

export default app;
