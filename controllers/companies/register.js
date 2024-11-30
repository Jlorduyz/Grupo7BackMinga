import Company from "../../models/Company.js";

let register = async (req, res, next) => {
    try {
        let company = req.body
        let all = await Company.create(company)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { register }