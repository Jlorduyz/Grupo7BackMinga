import joi from "joi"; 

const schema = joi.object({   
    manga_id: joiObjectId().required().messages({
        'any.required': 'Manga ID is required',
        'string.objectId': 'Invalid Manga ID'
    }),
    author_id: joiObjectId().optional().messages({
        'string.objectId': 'Invalid Author ID'
    }),
    company_id: joiObjectId().optional().messages({
        'string.objectId': 'Invalid Company ID'
    }),
    reaction: joi.string().required().trim().min(1).max(100).messages({
        'any.required': 'Reaction is required',
        'string.empty': 'Reaction cannot be empty',
        'string.min': 'Reaction must be at least 1 character long',
        'string.max': 'Reaction cannot exceed 100 characters'
    }), 
    
    
    online: joi.boolean()
})

export default schema