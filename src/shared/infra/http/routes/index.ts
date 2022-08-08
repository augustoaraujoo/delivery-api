import { Router } from "express";
import { authRoute } from "./authClient.routes";
import { clientsRouter } from "./clientsRouter.routes";

const routes = Router();

routes.use("/clients", clientsRouter);
routes.use("/auth", authRoute);
export { routes };