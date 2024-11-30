import Manga from "../../models/Manga.js";

let allMangas = async (req, res, next) => {
    try {
        let all = await Manga.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let mangasByID = async (req, res, next) => {
    try {
        let id = req.params.id
        let mangas = await Manga.find({ author_id: id })
        return res.status(200).json({
            response: mangas
        })
    } catch (error) {
        next(error)
    }    
}

export { allMangas, mangasByID }