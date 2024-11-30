import Comment from "../../models/Comment.js";

let deleteComment = async (req, res, next) => {
    try {
        let destroy = await Comment.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        }else{
            return res.status(404).json({
                message: "Comment not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteComment }