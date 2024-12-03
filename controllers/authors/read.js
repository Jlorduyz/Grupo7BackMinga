import Author from "../../models/Author.js";

let allAuthor = async (req, res, next) => {
    try {
        let all = await Author.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
export { allAuthor }