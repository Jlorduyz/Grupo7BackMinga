import joi from "joi"; 

const schema = joi.object({   
    name: joi.string().required().trim().min(2).max(100).messages({
        'any.required': 'Name is required',
        'string.empty': 'Name cannot be empty',
        'string.min': 'Name must be at least 2 characters long',
        'string.max': 'Name cannot exceed 100 characters'
    }),
    webSite: joi.string().required().trim().uri({
        scheme: ['http', 'https']
    }).messages({
        'any.required': 'Website is required',
        'string.empty': 'Website cannot be empty',
        'string.uri': 'Invalid website URL. Must start with http:// or https://'
    }),
    description: joi.string().required().trim().min(10).max(500).messages({
        'any.required': 'Description is required',
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must be at least 10 characters long',
        'string.max': 'Description cannot exceed 500 characters'
    }),
    photo: joi.string().required().trim().uri({
        scheme: ['http', 'https']
    }).messages({
        'any.required': 'Photo URL is required',
        'string.empty': 'Photo URL cannot be empty',
        'string.uri': 'Invalid photo URL. Must start with http:// or https://'
    }),
    userId: joiObjectId().required().messages({
        'any.required': 'User ID is required',
        'string.objectId': 'Invalid User ID'
    }),
    active: joi.boolean().required().messages({
        'any.required': 'Active status is required',
        'boolean.base': 'Active must be a boolean value (true or false)'
    })
})

export default schema