import Comment from "../../models/Comment.js";

let create = async (req, res, next) => {
    try {
        let comment = req.body
        let all = await Comment.create(comment)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create} 