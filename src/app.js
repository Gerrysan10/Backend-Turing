import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from './routes/routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);


export default app;