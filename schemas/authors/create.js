import joi from "joi-oid"; 

const schema = joi.object({   
    name: joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
        'string.base': 'The name cannot use only numbers',
        'string.pattern.base': 'The name can only contain letters, numbers and spaces',
        'string.min': 'The name must be at least 3 characters',
        'string.max': 'The name must be a maximum of 22 characters'
    }), 
    lastName: joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
        'string.base': 'The name cannot use only numbers',
        'string.pattern.base': 'The name can only contain letters, numbers and spaces',
        'string.min': 'The name must be at least 3 characters',
        'string.max': 'The name must be a maximum of 22 characters'
    }),
    city: joi.string().required().messages({
        'string.base': 'Must be a valid city'
    }),    
    country: joi.string().required().messages({
        'string.pattern.base': 'please enter your country'
    }), 
    photo: joi.string().required().messages({
    'string.pattern.base': 'please enter url image valid'
    }), 
    userId: joi.objectId().required().messages({
        'any.required': 'User ID is required',
        'string.pattern.name': 'The user ID must be a valid ObjectId'
    }),
    active: joi.boolean()
})

export default schema