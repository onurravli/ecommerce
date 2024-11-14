import app from "./app";

import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

const name = process.env.AUTH_SERVICE_NAME;
const host = process.env.AUTH_SERVICE_HOST;
const port = process.env.AUTH_SERVICE_PORT;

app.get("/", (req, res) => {
  res.json({
    message: `${name} service is running`,
  });
});

app.listen(port, () => {
  console.log(`${name} service is running on ${host}:${port}`);
});
