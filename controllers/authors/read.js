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

let oneAuthor = async (req, res, next) => {
    try {
        let doc = await Author.findOne(req.user)
        return res.status(200).json({
            response: doc
        })
    } catch (error) {
        return res.status(404).json({
            message: " not found"
        })
    }
}

let byuserId = async (req, res, next) => {
    try {
        let id = req.params.id
        let author = await Author.find({ userId: id })
        return res.status(200).json({
            response: author
        })
    } catch (error) {
        next(error)
    }
}
export { allAuthor, oneAuthor, byuserId }