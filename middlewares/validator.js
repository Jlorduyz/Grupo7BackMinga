const validator = (Schema) => [
    (req, res, next) => {
        const validation = Schema.validate(req.body,{abortEarly: false});
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map((detail) => detail.message)
            });
            }
            return next();
        }
    
]

export default validator