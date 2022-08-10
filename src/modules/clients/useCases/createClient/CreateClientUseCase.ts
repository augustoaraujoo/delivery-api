import { IRequest } from "../../../../interface/Interface";
import { ClientRepository } from "../../repositories/ClientRepository";

class CreateClientUseCase {
    constructor(private clientRepository: ClientRepository) { }

    async execute({ username, password }: IRequest): Promise<any> {
        const clientExists = await this.clientRepository.findFirst(username);

        if (clientExists) {
            throw new Error("Client already exists")
        }
        const res = await this.clientRepository.create({ username, password })
        return res;
    }
}

export { CreateClientUseCase };