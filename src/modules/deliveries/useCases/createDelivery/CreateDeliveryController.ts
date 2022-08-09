import { Response, Request } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

class CreateDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { item_name } = req.body;
        const { id_client } = req;
        
        const deliveryUseCase = new CreateDeliveryUseCase();
        const delivery = await deliveryUseCase.execute({
            item_name,
            id_client
        });

        return res.json(delivery).status(201);

    }
}

export { CreateDeliveryController };