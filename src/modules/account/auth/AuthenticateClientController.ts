import { Response, Request } from 'express';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

class AuthenticateClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username, password } = req.body;
        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute({
            username,
            password
        });
        return res.json(result).status(200);
    }
}

export { AuthenticateClientController };