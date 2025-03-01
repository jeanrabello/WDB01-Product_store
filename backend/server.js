import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Importing routes
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json());

// Applying routes
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
