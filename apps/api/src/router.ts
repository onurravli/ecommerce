import { services } from "./services";

import { Router } from "express";
import proxy from "express-http-proxy";

const router: Router = Router();

services.forEach((service) => {
  router.use(
    `/api/v1/${service.name}`,
    proxy(`${service.host}:${service.port}`, {
      proxyReqPathResolver: (req) => {
        return req.url;
      },
    }),
  );
});

export default router;
