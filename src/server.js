import express  from "express";
import fileUpload from "express-fileupload";
import { PORT } from "./config.js";
import adminRouter from './routers/admin.router.js'
import elonRouter from './routers/elon.router.js'
import swaggerRouter from './swagger.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use( express.json() )
app.use( fileUpload() )
app.use(adminRouter)
app.use( elonRouter )
app.use( '/api-docs', swaggerRouter )





app.listen(PORT, () => console.log(`server started ${PORT}`))