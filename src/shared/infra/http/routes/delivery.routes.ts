import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";

const deliveryRouter = Router();

const createDeliveryController = new CreateDeliveryController()

deliveryRouter.post("/createDelivery", createDeliveryController.handle);

export { deliveryRouter };