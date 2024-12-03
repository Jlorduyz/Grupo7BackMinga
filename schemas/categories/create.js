import joi from "joi-oid"; 

const schema = joi.object({   
    name: joi.string().required().min(3).max(22).messages({
        'string.min': 'The name must be at least 3 characters',
        'string.max': 'The name must be a maximum of 22 characters'
    }), 
    color: joi.string().required().messages({
        'string.base': 'please enter color valid'
    }),
    hover: joi.string().required().messages({
        'string.base': 'please enter color valid'
    }),    
    description: joi.string().required().min(3).messages({
        'string.min': 'The description must have a minimum of 3 characters',
    }),    
    cover_photo: joi.string().required().messages({
        'string.pattern.base': 'please enter url image valid'
    }),
    character_photo: joi.string().required().messages({
        'string.pattern.base': 'please enter url image valid'
    }), 
    admin_id: joi.objectId().required().messages({
        'any.required': 'User ID is required',
        'string.pattern.name': 'The user ID must be a valid ObjectId'
    }),
    
})

export default schema