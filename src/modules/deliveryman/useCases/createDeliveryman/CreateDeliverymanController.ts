import { Response, Request } from 'express';
import { DeliverymanRepository } from '../../repositories/prismaRepository/DeliverymanRepository';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

class CreateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username, password } = req.body;
        const deliverymanRepository = new DeliverymanRepository()
        const createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymanRepository);
        const result = await createDeliverymanUseCase.execute({
            username,
            password
        })
        return res.json(result).status(201);

    }
}

export { CreateDeliverymanController };