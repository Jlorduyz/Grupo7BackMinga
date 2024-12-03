import joi from "joi"; 

const schema = joi.object({   
    author_id: joiObjectId().required().messages({
        'any.required': 'Author ID is required',
        'string.objectId': 'Invalid Author ID'
    }),
    company_id: joiObjectId().optional().messages({
        'string.objectId': 'Invalid Company ID'
    }),
    title: Joi.string().required().trim().min(2).max(200).messages({
        'any.required': 'Title is required',
        'string.empty': 'Title cannot be empty',
        'string.min': 'Title must be at least 2 characters long',
        'string.max': 'Title cannot exceed 200 characters'
    }),
    cover_photo: Joi.string().required().trim().uri({
        scheme: ['http', 'https']
    }).messages({
        'any.required': 'Cover photo is required',
        'string.empty': 'Cover photo URL cannot be empty',
        'string.uri': 'Invalid cover photo URL. Must start with http:// or https://'
    }),
    description: Joi.string().required().trim().min(10).max(1000).messages({
        'any.required': 'Description is required',
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must be at least 10 characters long',
        'string.max': 'Description cannot exceed 1000 characters'
    }),
    category_id: joiObjectId().required().messages({
        'any.required': 'Category ID is required',
        'string.objectId': 'Invalid Category ID'
    }), 
    
    
    online: joi.boolean()
})

export default schema