import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res)=>{
    try {
        const response = await commentService.createComment(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
        return res.status(500).json({
            success: true,
            message: "Successfully created new comment",
            error: response,
            data:{}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in service",
            error: error,
            data:{}
        });
    }
}

