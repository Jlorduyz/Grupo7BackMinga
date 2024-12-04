import Chapter from "../../models/Chapter.js";  

let read = async (req, res, next) => {
    try {
        let all = await Chapter.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let readByID = async (req, res, next) => {
    try {
        let id = req.params.id
        let all = await Chapter.find({_id: id})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let readPagesByID = async (req, res, next) => {
    try {
        let id = req.params.id
        let all = await Chapter.find({_id: id})
        return res.status(200).json({
            response: (all[0].pages)
        })
    } catch (error) {
        next(error)
    }
}

let readByMangaID = async (req, res, next) => {
    try {
        let id = req.params.id
        let all = await Chapter.find({manga_id: id})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {read, readByID, readByMangaID, readPagesByID}