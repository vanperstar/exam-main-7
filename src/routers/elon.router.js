import { Router } from "express";
import elonController from '../controllers/elon.controller.js'
import validate from "../middlewares/validate.js";



const router = Router()

router.get('/elon', elonController.ELONGET)
router.post('/elon', validate, elonController.ELONPOST)



export default router