import Author from "../../models/Author.js";

let deleteAuthor = async (req, res, next) => {
    try {
        let destroy = await Author.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        }else{
            return res.status(404).json({
                message: "Author not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteAuthor}