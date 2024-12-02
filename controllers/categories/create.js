import Category from "../../models/Category.js";

let create = async (req, res, next) => {
    try {
        let category = req.body;
        let all = await Category.create(category);
        return res.status(201).json({
            response: all,
        });
    } catch (error) {
        next(error);
    }
};

export { create };