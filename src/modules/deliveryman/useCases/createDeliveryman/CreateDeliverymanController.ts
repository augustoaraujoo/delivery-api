import { Response, Request } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

class CreateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username, password } = req.body;
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const result = await createDeliverymanUseCase.execute({
            username,
            password
        })
        return res.json(result).status(201);

    }
}

export { CreateDeliverymanController };