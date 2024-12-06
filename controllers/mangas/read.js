import Manga from "../../models/Manga.js";

let allMangas = async (req, res, next) => {
try {
    let {name} = req.query
    let query = {}
    if (name) {
        query.name = {$regex: '^' + name, $options: 'i'}
    }

    let all = await Manga.find(query)
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
let mangasDescripitionByID = async (req, res, next) => {
    try {
        let id = req.params.id
        let mangas = await Manga.find({ _id: id })
        return res.status(200).json({
            response: (mangas[0].description)
            
        })
    } catch (error) {
        next(error)
    }    
}

let mangasByCategoryID = async (req, res, next) => {
    try {
        let id = req.params.id
        let mangas = await Manga.find({ category_id: id })
        return res.status(200).json({
            response: mangas
        })
    } catch (error) {
        next(error)
    }    
}
export { allMangas, mangasByID, mangasByCategoryID,mangasDescripitionByID }