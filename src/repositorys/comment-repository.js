import comment from "../models/comment.js"
import CrudRepository from "./crud-repository.js";

class CommentRepoditory extends CrudRepository{
    constructor(){
        super(comment);
    }

}

export default CommentRepoditory;