import { Router } from "express";
import {register, login} from '../controllers/auth.controller.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerScheme,loginScheme } from "../schemas/auth.schema.js";




const router = Router();
//ruta para registrar un nuevo usuario
router.post('/register',validateSchema(registerScheme),register);
//ruta para iniciar sesion
router.post('/login',validateSchema(loginScheme),login);






export default router;