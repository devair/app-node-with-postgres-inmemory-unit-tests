import 'reflect-metadata';
import { AppDataSource } from './data-source';
import "reflect-metadata";
import express from "express";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

if (process.env.NODE_ENV !== 'test') {
  AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
      console.log(`Server started in ${process.env.NODE_ENV} mode on port 3000`);
    });
  }).catch(error => console.log(error));
}

export { app };