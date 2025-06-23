import express, { urlencoded } from "express"
import cors from 'cors';
import { PORT } from "./config/env";

const app = express();

// general middlewares;
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(cors({
    origin: "*"
}));

// routes;


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});