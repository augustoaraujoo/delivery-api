import { Response, Request } from 'express';
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase';

class FindAllAvailableController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAllAvailableUseCase = new FindAllAvailableUseCase();
        const deliveries = await findAllAvailableUseCase.execute();
        if (!deliveries) {
            return res.status(400).json({
                message: 'No deliveries found'
            })
        }
        return res.json(deliveries).status(200);

    }
}

export { FindAllAvailableController };