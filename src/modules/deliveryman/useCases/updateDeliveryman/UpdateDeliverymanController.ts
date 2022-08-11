import { Response, Request } from 'express';
import { DeliverymanRepository } from '../../repositories/prismaRepository/DeliverymanRepository';
import { UpdateDeliverymanUseCase } from '../updateDeliveryman/UpdateDeliverymanUseCase';

class UpdateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id_deliveryman } = req;
        const { id: id_delivery } = req.params;
        const deliverymanRepository = new DeliverymanRepository()
        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase(deliverymanRepository);
        const result = await updateDeliverymanUseCase.execute({ id_delivery, id_deliveryman });
        return res.json(result).status(200);

    }
}

export { UpdateDeliverymanController };