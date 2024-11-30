import Company from "../../models/Company.js";

const updateCompany = async (req, res, next) => {
    try {
        let upd = await Company.findOneAndUpdate(
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
                    msg: "Company updated"
                }
            })
        } else {
            return res.status(404).json({
                message: {
                    msg: "Company not found"
                }
            })
        }
    } catch (error) {
        next(error)
    }
}

export { updateCompany }