import Author from "../../models/Author.js";

let create = async (req, res, next) => {
    try {
        let author = req.body
        let all = await Author.create(author)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create} 