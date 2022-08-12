import { Router } from "express";
import { UpdateEndDateController } from "../../../../modules/deliveryman/useCases/updateEndDate/UpdateEndDateController";
import { AuthenticateDeliverymanController } from "../../../../modules/account/auth/authDeliveryman/AuthenticateDeliverymanController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { UpdateDeliverymanController } from "../../../../modules/deliveryman/useCases/updateDeliveryman/UpdateDeliverymanController";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";

const deliverymanRouter = Router();
const createDeliverymanController = new CreateDeliverymanController();
const authDeliverymanController = new AuthenticateDeliverymanController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliverymanRouter.post("/createDeliveryman", createDeliverymanController.handle);

deliverymanRouter.post("/authDeliveryman", authDeliverymanController.handle);

deliverymanRouter.get("/findAllAvailable", ensureAuthenticateDeliveryman, findAllAvailableController.handle)

deliverymanRouter.patch("/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

deliverymanRouter.patch("/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)
export { deliverymanRouter };