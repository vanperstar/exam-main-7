import { Router } from "express";
import adminController from '../controllers/admin.controller.js'
import validate from "../middlewares/validate.js";

const router = Router()

router.post('/login', validate, adminController.LOGIN)



export default router