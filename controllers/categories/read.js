import Category from "../../models/Category.js";

let read = async (req, res, next) => {
    try {
        let all = await Category.find()
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
        let all = await Category.find({ _id: id })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export  { read, readByID }