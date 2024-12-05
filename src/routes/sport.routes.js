import { createRanking,createSport,getSports, getRankings } from "../controllers/sport.controller.js";
import { sportScheme, rankingScheme } from "../schemas/sport.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { Router } from "express";


const router = Router();
// Ruta para crear un nuevo deporte
router.post("/sports", createSport);

// Ruta para obtener todos los deportes
router.get("/sports", getSports);

// Ruta para crear un nuevo ranking
router.post("/rankings", createRanking);

// Ruta para obtener todos los rankings
router.get("/rankings", getRankings);

export default router;