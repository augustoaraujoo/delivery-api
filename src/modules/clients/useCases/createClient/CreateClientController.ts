import { Response, Request } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username, password } = req.body;
        const createClientUseCase = new CreateClientUseCase();
        const result = createClientUseCase.execute({
            username,
            password
        })
        return res.json(result).status(201);

    }
}

export { CreateClientController };