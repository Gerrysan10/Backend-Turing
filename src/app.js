import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import sportRoutes from './routes/sport.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(authRoutes);
app.use(sportRoutes);


export default app;