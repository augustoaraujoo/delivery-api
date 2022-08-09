import { Router } from "express";
import { AuthenticateDeliverymanController } from "../../../../modules/account/auth/authDeliveryman/AuthenticateDeliverymanController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";

const deliverymanRouter = Router();
const createDeliverymanController = new CreateDeliverymanController();
const authDeliverymanController = new AuthenticateDeliverymanController();
const findAllAvailableController = new FindAllAvailableController();

deliverymanRouter.post("/createDeliveryman", createDeliverymanController.handle);

deliverymanRouter.post("/authDeliveryman", authDeliverymanController.handle);

deliverymanRouter.get("/findAllAvailable", ensureAuthenticateDeliveryman, findAllAvailableController.handle)

export { deliverymanRouter };