import mongoose from 'mongoose';

const connectDB = async () => {
  const dbURI = process.env.MONGODB_URI;

  if (!dbURI) {
    throw new Error('MongoDB connection string is not defined in .env file.');
  }

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // Throw lỗi để server.js xử lý
  }
};

export default connectDB; // Xuất hàm connectDB
