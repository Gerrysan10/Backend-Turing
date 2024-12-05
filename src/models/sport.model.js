import mongoose from "mongoose";

const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Sport', SportSchema);
