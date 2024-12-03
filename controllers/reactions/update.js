import Reaction from "../../models/Reaction.js";

const updateReaction = async (req, res, next) => {
    try {
        let upd = await Reaction.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (upd) {
            return res.status(200).json({
                response: {
                    upd
                },
                message: {
                    msg: "Reaction updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "Reaction not found"
                }
            })
        }

    } catch (error) {
        next(error)
    }
}

export {updateReaction} 