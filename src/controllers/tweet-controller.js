import TweetService from "../services/tweet-service.js";

const tweetservice= new TweetService();

export const createTweet = async (req,res)=>{
    try {
        const response = await tweetservice.create(req.body);
        return res.status(201).json({
            success: true,
            message : 'Tweet created successfully',
            data : response,
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message : 'Something Went Wrong',
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
