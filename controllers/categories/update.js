import Category from "../../models/Category.js";

let updateCategory = async (req, res, next) => {
    try {
        let upd = await Category.findOneAndUpdate(
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
                    msg: "Category updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "Category not found"
                }
            })
        }
    } catch (error) {
        next(error)
    }
}
export { updateCategory }