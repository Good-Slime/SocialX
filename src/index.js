import express from "express";
import cookieParser from "cookie-parser";
import config from "./utils/config.js";
import connectDB from "./connections/index.js";

const app = express();

import service from "./services/tweet-service.js";


connectDB(config.url);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = config.port;

app.listen(PORT,async () => { 
    console.log(`Server is running in the port ${PORT}`)
    let ser = new service();
    await ser.create({content : "my #fiRst #twEet"})
});