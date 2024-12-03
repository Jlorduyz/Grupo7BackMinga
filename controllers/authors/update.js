import Author from "../../models/Author.js";

const updateAuthor = async (req, res, next) => {
    try {
        let upd = await Author.findOneAndUpdate(
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
                    msg: "Author updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "Author not found"
                }
            })
        }

    } catch (error) {
        next(error)
    }
}

export {updateAuthor} 