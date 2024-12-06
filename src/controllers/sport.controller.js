import Sport from "../models/sport.model.js"
import Ranking from '../models/ranking.model.js';
import Notice from "../models/notice.model.js";

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

// Crear una nueva noticia
export const createNotice = async (req, res) => {
    const { title, description, linkImage, linkNotice } = req.body;
    try {
        const newNotice = new Notice({  title, description, linkImage, linkNotice });
        await newNotice.save();
        return res.status(201).json(newNotice);
    } catch (error) {
        console.error("Error al crear el aviso:", error);
        return res.status(500).json({ message: "Error al crear el aviso", error });
    }
};

// Obtener todas las noticias
export const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find();
        return res.status(200).json(notices);
    } catch (error) {
        console.error("Error al obtener los avisos:", error);
        return res.status(500).json({ message: "Error al obtener los avisos", error });
    }
};

// Eliminar una noticia por ID
export const deleteNotice = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNotice = await Notice.findByIdAndDelete(id);
        if (!deletedNotice) {
            return res.status(404).json({ message: "Noticia no encontrada" });
        }
        return res.status(200).json({ message: "Noticia eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar la noticia:", error);
        return res.status(500).json({ message: "Error al eliminar la noticia", error });
    }
};

// Actualizar una noticia por ID
export const updateNotice = async (req, res) => {
    const { id } = req.params;
    const { title, description, linkImage, linkNotice } = req.body;
    try {
        const updatedNotice = await Notice.findByIdAndUpdate(
            id,
            { title, description, linkImage, linkNotice },
            { new: true, runValidators: true }
        );

        if (!updatedNotice) {
            return res.status(404).json({ message: "Noticia no encontrada" });
        }
        return res.status(200).json(updatedNotice);
    } catch (error) {
        console.error("Error al actualizar la noticia:", error);
        return res.status(500).json({ message: "Error al actualizar la noticia", error });
    }
};







