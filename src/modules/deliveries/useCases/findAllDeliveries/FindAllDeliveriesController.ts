import { Response, Request } from 'express';
import { DeliveryRepository } from '../../repositories/prismaRepository/DeliveryRepository';
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase';

class FindAllDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id_deliveryman } = req;
        const deliveriesRepository = new DeliveryRepository();

        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase(deliveriesRepository)
        const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman);
        return res.json(deliveries);

    }
}

export { FindAllDeliveriesController };