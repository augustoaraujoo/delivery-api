import { Router } from "express";
import { authRoute } from "./authClient.routes";
import { clientsRouter } from "./clientsRouter.routes";
import { deliverymanRouter } from "./deliveryman.routes";

const routes = Router();

routes.use("/clients", clientsRouter);
routes.use("/auth", authRoute);
routes.use("/deliveryman", deliverymanRouter);
export { routes };