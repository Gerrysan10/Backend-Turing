import { createRanking,createSport,getSports, getRankings, createNotice, getNotices, updateNotice, deleteNotice} from "../controllers/sport.controller.js";
import { sportScheme, rankingScheme, noticeSchema} from "../schemas/sport.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { Router } from "express";


const router = Router();
// Ruta para crear un nuevo deporte
router.post("/sports",validateSchema(sportScheme), createSport);

// Ruta para obtener todos los deportes
router.get("/sports", getSports);

// Ruta para crear un nuevo ranking
router.post("/rankings",validateSchema(rankingScheme),createRanking);

// Ruta para obtener todos los rankings
router.get("/rankings", getRankings);

// Ruta para crear una noticia
router.post("/notices", validateSchema(noticeSchema), createNotice);

// Ruta para obtener todas las noticias
router.get("/notices", getNotices);

// Ruta para actualizar una noticia por ID
router.put("/notices/:id", validateSchema(noticeSchema), updateNotice);

// Ruta para eliminar una noticia por ID
router.delete("/notices/:id", deleteNotice);


export default router;