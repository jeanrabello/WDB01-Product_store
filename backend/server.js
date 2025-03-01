import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";

// Importing routes
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use(express.json());

// Applying routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started`);
});
