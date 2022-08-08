import { Response, Request } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username, password } = req.body;
        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute({
            username,
            password
        })
        console.log(result);
        
        return res.json(result).status(201);

    }
}

export { CreateClientController };