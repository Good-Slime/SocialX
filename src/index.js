import express from "express";
import cookieParser from "cookie-parser";
import config from "./utils/config.js";
import connectDB from "./connections/index.js";

import apiRoutes from "./routes/index.js";

const app = express();

connectDB(config.url);

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

const PORT = config.port;

app.listen(PORT,async () => { 
    console.log(`Server is running in the port ${PORT}`)
});