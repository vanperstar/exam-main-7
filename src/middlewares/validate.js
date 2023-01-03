import { loginSchema, elonSchema } from "../utils/validation.js"

export default (req, res, next) => {
    try {
        if(req.url == '/login' && req.method == 'POST'){
           let { error } = loginSchema.validate(req.body)
           if(error) throw error
        }

        if(req.url == '/elon' && req.method == 'POST'){
            let { error } = elonSchema.validate(req.body)
            if(error) throw error
         }

        return next()
    } catch (error) {
        res.status(400).json({status: 400, message: error.message})
    }
}