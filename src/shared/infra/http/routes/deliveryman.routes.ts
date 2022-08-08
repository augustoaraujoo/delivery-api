import { Router } from "express";
import { AuthenticateDeliverymanController } from "../../../../modules/account/auth/authDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const deliverymanRouter = Router();
const createDeliverymanController = new CreateDeliverymanController();
const authDeliverymanController = new AuthenticateDeliverymanController();

deliverymanRouter.post("/createDeliveryman", createDeliverymanController.handle);

deliverymanRouter.post("/authDeliveryman", authDeliverymanController.handle);

export { deliverymanRouter };