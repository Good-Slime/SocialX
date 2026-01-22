import mongoose from "mongoose";

const hashtagschma = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]

},{timestamps: true})

const Hashtag = mongoose.model('Hashtag', hashtagschma);

export default Hashtag;