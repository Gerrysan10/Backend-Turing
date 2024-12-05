import mongoose from "mongoose";

const RankingSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    data: [
        {
            Pos: { type: Number, required: true },
            Equipo: { type: String, trim: true },
            J: { type: Number }, 
            G: { type: Number }, 
            DIF: { type: String }, 
            PTS: { type: Number }, 
            "%PG": { type: Number }, 
            PJ: { type: Number }, 
            PF: { type: Number }, 
            MR: { type: String },
            Jugador: { type: String },
            Edad: { type: Number }, 
            País: { type: String }, 
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model('Ranking', RankingSchema);
