import Reaction from "../../models/Reaction.js";

let deleteReaction  = async (req, res, next) => {
    try {
        let destroy = await Reaction.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        }else{
            return res.status(404).json({
                message: "Reaction not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteReaction }