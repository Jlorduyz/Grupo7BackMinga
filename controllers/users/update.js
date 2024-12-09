import User from "../../models/User.js";

const updateUser = async (req, res,next) => {
    try {
        let upd = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true })
        if (upd) {
            return res.status(200).json({
                response: {
                    upd
                },
                message: {
                    msg: "User updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "User not found"
                }
            })
        }

    } catch (error) {
        next(error)
    }
}

let updateUserByEmail = async (req, res, next) => {
    try {
        let upd = await User.findOneAndUpdate(
            { email: req.params.email },
            req.body,
            { new: true })
        if (upd) {
            return res.status(200).json({
                response: {
                    upd
                },
                message: {
                    msg: "User updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "User not found"
                }
            })
        }
    } catch (error) {
        next(error)
    }

    

}
export { updateUser, updateUserByEmail }