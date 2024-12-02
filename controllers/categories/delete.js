import Category from "../../models/Category.js";

let removeCategory = async (req, res, next) => {
    try {
        let destroy = await Category.findByIdAndDelete(req.params.id);
        if (destroy) {
            return res.status(200).json({
                response: destroy,
            });
        } else {
            return res.status(404).json({
                message: "Category not found",
            });
        }
    } catch (error) {
     next(error);   
    }
}

export { removeCategory }