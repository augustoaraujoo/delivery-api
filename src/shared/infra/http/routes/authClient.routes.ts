import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/account/auth/AuthenticateClientController";

const authRoute = Router();
const authClientController = new AuthenticateClientController();

authRoute.post("/createAuth", authClientController.handle)

export { authRoute };