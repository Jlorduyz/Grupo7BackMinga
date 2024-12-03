import Reaction from "../../models/Reaction.js";

let allReaction = async (req, res, next) => {
    try {
        let all = await Reaction.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allReaction }