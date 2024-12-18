import Chapter from "../../models/Chapter.js";

let remove = async (req, res, next) => {
    try {
        let destroy = await Chapter.findByIdAndDelete(req.params.id);
        if (destroy) {
            return res.status(200).json({
                response: destroy,
            });
        } else {
            return res.status(404).json({
                message: "Chapter not found",
            });
        }
    } catch (error) {
        next(error);
    }
    }

    export { remove };