import express, { urlencoded } from "express"
import { connectToDB } from "./database/mongodb.js";
import cors from 'cors';
import { PORT } from "./config/env.js";

const app = express();

// general middlewares;
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(cors({
    origin: "*"
}));

// routes;


app.listen(PORT, async () => {
    console.log(`Server started on port: ${PORT}`);

    await connectToDB();
});