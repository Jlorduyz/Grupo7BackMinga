import Company from "../../models/Company.js";

let readAllCompanies = async (req, res, next) => {
    try {
        let all = await Company.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let companyByID = async (req, res, next) => {
    try {
        let companyQ = req.params.id
        let company = await Company.find({ _id: companyQ })
        return res.status(200).json({
            response: company
        })
    } catch (error) {
        next(error)
    }
}

export { readAllCompanies, companyByID }