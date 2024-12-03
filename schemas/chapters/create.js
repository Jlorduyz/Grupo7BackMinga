import joi from "joi-oid"; 

const schema = joi.object({   
    manga_id: joi.objectId().required().messages({
        'any.required': 'manga ID is required',
        'string.pattern.name': 'The manga ID must be a valid ObjectId'
    }),
    title: joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/).min(3).max(22).messages({
        'string.base': 'The name cannot use only numbers',
        'string.pattern.base': 'The name can only contain letters, numbers and spaces',
        'string.min': 'The name must be at least 3 characters',
        'string.max': 'The name must be a maximum of 22 characters'
    }),
    cover_photo: joi.string().required().messages({
        'string.pattern.base': 'please enter url image valid'
    }), 
    pages: joi.array().items(joi.string()).min(1).required().messages({
        'any.required': 'Pages are required',
        'array.min': 'At least one page must be provided',
        'array.base': 'Pages must be an array of strings'
    }),
    order: joi.number()
        .required()
        .positive()
        .messages({
            'number.base': 'The value must be a number',
            'number.positive': 'The value must be positive',
        }),
    
})

export default schema