import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Hello to memories API");
});

const CONNECTION_URL = 'mongodb+srv://Aniket:Aniket_1029@cluster0.t1uexqi.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
  
   