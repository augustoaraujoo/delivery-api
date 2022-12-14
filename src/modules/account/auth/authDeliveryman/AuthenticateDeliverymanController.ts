import { Response, Request } from 'express';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

class AuthenticateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;
      
        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
      
        const result = await authenticateDeliverymanUseCase.execute({
            username,
            password
        });
        return res.json(result).status(200);
    }
}

export { AuthenticateDeliverymanController };