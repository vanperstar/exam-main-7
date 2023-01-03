import Joi from 'joi'

export const loginSchema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(8).required()
})

export const elonSchema = Joi.object({
    full_name: Joi.string().min(2).required(),
    professiya: Joi.string().min(3).required(),
    phone: Joi.number().min(10).required(),
    elon_title: Joi.string().min(5).required(),
    image: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|png|webp)$/i)).error( new Error('elon rasm xato')),
    elon_body: Joi.string().min(6).required(),
    date: Joi.string().required(),
    hourId: Joi.number().required(),
    category_id: Joi.number().required(),
    sub_category_id: Joi.number().required(),
})

