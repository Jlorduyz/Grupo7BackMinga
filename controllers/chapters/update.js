import Chapter from "../../models/Chapter.js";

let updateChapter = async (req, res, next) => {
    try {
        let upd = await Chapter.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (upd) {
            return res.status(200).json({
                response: {
                    upd,
                },
                message: {
                    msg: "Chapter updated",
                },
            });
        } else {
            return res.status(404).json({
                message: {
                    msg: "Chapter not found",
                },
            });
        }
    } catch (error) {
        next(error); 
    }
};

export { updateChapter };