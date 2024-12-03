import app from "./app.js";
import connectDB from "./config/db.config.js"; // Import hàm connectDB

// Tải các biến môi trường từ file .env
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;

// Kết nối MongoDB
(async () => {
  try {
    await connectDB(); // Gọi hàm connectDB từ file config
    console.log("Connected to MongoDB");
    // Khởi động server
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the application:", err);
    process.exit(1); // Thoát nếu kết nối MongoDB thất bại
  }
})();
