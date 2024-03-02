import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import { notFound, errorHandler } from "../src/Api/Middlewares/HandleError";
import twoxRouter from "./Api/Routes/Twox.Route";

const app = express();



//!routes
app.use(twoxRouter);



//! Middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 100000 }));




//! Error handling middleware
app.use(notFound);
app.use(errorHandler);







const PORT: number = parseInt(process.env.PORT || "3000");

app.listen(PORT, () => {
    console.log(`Server is Listening to the PORT ${PORT}`);
});