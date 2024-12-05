import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    linkImage: {
        type: String,
        required: true,
        trim: true
    },
    linkNotice: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Notice', NoticeSchema);
