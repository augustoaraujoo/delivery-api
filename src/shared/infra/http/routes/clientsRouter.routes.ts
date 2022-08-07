import { Router } from 'express';
import { CreateClientController } from '../../../../modules/clients/useCases/createClient/CreateClientController';
const clientsRouter = Router();

const createClientController = new CreateClientController();

clientsRouter.post('/create', createClientController.handle);

export { clientsRouter }