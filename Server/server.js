import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import productRouter from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import contactRouter from "./Routes/contactRoutes.js";
import { notFound, errorHandler } from "./Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app = express();

app.use(express.json());
app.use(cors());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contact", contactRouter);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is running...");
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server running in port ${PORT}...`));