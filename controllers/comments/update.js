import Comment from "../../models/Comment.js";

const updateComment = async (req, res, next) => {
    try {
        let upd = await Comment.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (upd) {
            return res.status(200).json({
                response: {
                    upd
                },
                message: {
                    msg: "Comment updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "Comment not found"
                }
            })
        }

    } catch (error) {
        next(error)
    }
}

export {updateComment} 