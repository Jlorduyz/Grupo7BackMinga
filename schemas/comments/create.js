import joi from "joi"; 

const schema = joi.object({   
     chapterid_: joiObjectId().required().messages({
        'any.required': 'Chapter ID is required',
        'string.objectId': 'Invalid Chapter ID'
    }),
    author_id: joiObjectId().optional().messages({
        'string.objectId': 'Invalid Author ID'
    }),
    company_id: joiObjectId().optional().messages({
        'string.objectId': 'Invalid Company ID'
    }),
    message: joi.string().required().trim().min(1).max(5000).messages({
        'any.required': 'Message is required',
        'string.empty': 'Message cannot be empty',
        'string.min': 'Message must be at least 1 character long',
        'string.max': 'Message cannot exceed 5000 characters'
    })
})

export default schema