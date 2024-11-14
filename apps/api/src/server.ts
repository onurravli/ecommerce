import router from "./router";
import { services } from "./services";

import { config } from "@ecommerce/shared";
import cors from "cors";
import dotenv from "dotenv";
import express, { type Application } from "express";

const NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

const app: Application = express();
const name = process.env.API_GATEWAY_NAME;
const host = process.env.API_GATEWAY_HOST;
const port = process.env.API_GATEWAY_PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.get(`${config.API_PREFIX}/services`, (req, res) => {
  res.json(services);
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.listen(port, () => {
  console.log(`${name} is running on ${host}:${port}`);
});
