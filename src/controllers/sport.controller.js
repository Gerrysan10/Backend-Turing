import Sport from "../models/sport.model.js"
import Ranking from '../models/ranking.model.js';

// Crear un nuevo ranking
export const createRanking = async (req, res) => {
    const { sport, title, data } = req.body;
    try {
        const newRanking = new Ranking({ sport, title, data });
        await newRanking.save();
        return res.status(201).json(newRanking);
    } catch (error) {
        console.error("Error al crear el ranking:", error);
        return res.status(500).json({ message: "Error al crear el ranking", error });
    }
};

// Crear una nueva imagen para un deporte
export const createSport = async (req, res) => {
    const { name, link } = req.body;
    try {
        const newSport = new Sport({ name, link });
        await newSport.save();
        return res.status(201).json(newSport);
    } catch (error) {
        console.error("Error al crear la imagen del deporte:", error);
        return res.status(500).json({ message: "Error al crear la imagen", error });
    }
};

// Obtener todos los rankings
export const getRankings = async (req, res) => {
    try {
        const rankings = await Ranking.find();
        return res.status(200).json(rankings);
    } catch (error) {
        console.error("Error al obtener los rankings:", error);
        return res.status(500).json({ message: "Error al obtener los rankings", error });
    }
};

// Obtener todos los deportes
export const getSports = async (req, res) => {
    try {
        const sports = await Sport.find();
        return res.status(200).json(sports);
    } catch (error) {
        console.error("Error al obtener las imágenes de deportes:", error);
        return res.status(500).json({ message: "Error al obtener las imágenes", error });
    }
};
