import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";

const deliveryRouter = Router();

const createDeliveryController = new CreateDeliveryController()

deliveryRouter.post("/createDelivery", ensureAuthenticateClient, createDeliveryController.handle);

export { deliveryRouter };