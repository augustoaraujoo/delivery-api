import { Router } from "express";
import { FindAllDeliveriesController } from "../../../../modules/deliveries/useCases/findAllDeliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";

const deliveryRouter = Router();

const createDeliveryController = new CreateDeliveryController()
const findAllDeliveriesController = new FindAllDeliveriesController()
deliveryRouter.post("/createDelivery", ensureAuthenticateClient, createDeliveryController.handle);

deliveryRouter.get("/findAllDeliveries", ensureAuthenticateClient, findAllDeliveriesController.handle)

export { deliveryRouter };