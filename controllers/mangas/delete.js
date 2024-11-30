import Manga from "../../models/Manga.js";

let deleteManga = async (req, res, next) => {
    try {
        let destroy = await Manga.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        } else {
            return res.status(404).json({
                message: "Manga not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteManga }