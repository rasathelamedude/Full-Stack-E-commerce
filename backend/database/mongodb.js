import mongoose from "mongoose";
import { CONNECTION_STRING } from "../config/env.js";

export const connectToDB = async () => {
    await mongoose.connect(CONNECTION_STRING);

    console.log("Successfully connected to database");
}
