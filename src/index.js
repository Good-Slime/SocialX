import express from "express";
import cookieParser from "cookie-parser";
import config from "./utils/config.js";
import connectDB from "./connections/index.js";

import apiRoutes from "./routes/index.js";

import LikeService from "./services/like-service.js"
import {UserRepository,TweetRepository} from "./repositorys/index.js"

const app = express();

connectDB(config.url);

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

const PORT = config.port;

app.listen(PORT,async () => { 
    console.log(`Server is running in the port ${PORT}`)

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10)
    // console.log(tweets);
    // const user = await userRepo.create({
    //     email:"rkr15@gmail.com",
    //     password:"123456",
    //     name:"nkr"
    // })
    // // console.log(user.id)
    
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet', user.id);
});