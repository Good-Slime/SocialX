import TweetService from "../services/tweet-service.js";

const tweetservice= new TweetService();

export const createTweet = async (req,res)=>{
    try {
        console.log("incrate tweet")
        console.log(req.user)
        const response = await tweetservice.create({
            content: req.body.content,
            userId: req.user._id
        });
        return res.status(201).json({
            success: true,
            message : 'Tweet created successfully',
            data : response,
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message : 'Something Went Wrong in tweet controller',
            data : {},
            error : error
        })
    }
}
export const getTweet = async (req,res)=>{
    try {
        const response = await tweetservice.get(req.params.id);
        return res.status(201).json({
            success: true,
            message : 'Successfull feched a tweet',
            data : response,
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message : 'unsuccesssful in fetching a tweet',
            data : {},
            error : error
        })
    }
}
