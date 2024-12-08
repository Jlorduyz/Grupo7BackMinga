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

let favoriteReactions = async (req, res, next) => {
    try {
        const favorites = await Reaction.find({
            reaction: { $in: ["👍", "😍"] }, 
        }).populate("manga_id", "title cover_photo category_id");
        return res.status(200).json({
            response: favorites,
        });
    } catch (error) {
        next(error);
    }
};

let reactionByUserID = async (req, res, next) => {
    try {
        let id = req.params.id
        let all = await Reaction.find({ userId: id })
        
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}


export { allReaction,favoriteReactions,reactionByUserID }