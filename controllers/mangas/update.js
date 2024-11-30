import Manga from "../../models/Manga.js";

const updateManga = async (req, res, next) => {
    try {
        let upd = await Manga.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            { new: true }
        )
        if (upd) {
            return res.status(200).json({
                response: {
                    upd
                },
                message: {
                    msg: "Manga updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "Manga not found"
                }
            })
        }
    } catch (error) {
        next(error)
    }
}

export { updateManga }