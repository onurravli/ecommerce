import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

const config = {
  API_VERSION: process.env.API_VERSION || "v1",
  API_PREFIX: `/api/${process.env.API_VERSION || "v1"}`,
};

export { config };
