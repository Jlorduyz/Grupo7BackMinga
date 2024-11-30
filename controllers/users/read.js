import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let userByID = async (req, res,next) => {
    try {
        let userQ = req.params.id
        let user = await User.find({ _id: userQ })
        return res.status(200).json({
            response: user
        })
    } catch (error) {
        next(error)
    }
}

export { allUsers, userByID }