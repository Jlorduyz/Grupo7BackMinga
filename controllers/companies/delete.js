import Company from "../../models/Company.js";

let deleteCompany = async (req, res, next) => {
    try {
        let destroy = await Company.findByIdAndDelete(req.params.id)
        if (destroy) {
            return res.status(200).json({
                response: destroy
            })
        }else{
            return res.status(404).json({
                message: "Company not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteCompany }