import mongoose from "mongoose";

function connectDB(url) {
     mongoose.connect(url)
    .then(() =>  console.log("Mongoose is connected"))
    .catch((err) => console.log(err))
}

export default connectDB;