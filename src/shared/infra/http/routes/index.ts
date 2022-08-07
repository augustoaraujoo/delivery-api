import { Router } from "express";
import { clientsRouter } from "./clientsRouter.routes";

const routes = Router();

routes.use("/clients", clientsRouter);

export { routes };