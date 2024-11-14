import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

export const services = [
  {
    name: process.env.AUTH_SERVICE_NAME,
    host: process.env.AUTH_SERVICE_HOST,
    port: process.env.AUTH_SERVICE_PORT,
    url: `${process.env.AUTH_SERVICE_HOST}:${process.env.AUTH_SERVICE_PORT}`,
  },
  {
    name: process.env.USERS_SERVICE_NAME,
    host: process.env.USERS_SERVICE_HOST,
    port: process.env.USERS_SERVICE_PORT,
    url: `${process.env.USERS_SERVICE_HOST}:${process.env.USERS_SERVICE_PORT}`,
  },
];
