import { IRequest } from "../../../../interface/Interface";
import { ClientRepository } from "../../repositories/prismaRepositoryMethods/ClientRepository";

class CreateClientUseCase {
    // trocamos aqui caso eu queira trabalhar com o ClientRepositoryInMemory que seria outro 'bd'
    constructor(private clientRepository: ClientRepository) { }

    async execute({ username, password }: IRequest): Promise<any> {
    /*não será necessário trocar nada aqui caso haja uma TROCA DE ORM graças a interface que implementa e respeita o InterfaceRepository
        não preciso mudar o nome dos métodos pois ele respeita minha interfaceRepository tbm
    */
        const clientExists = await this.clientRepository.findFirst(username);

        if (clientExists) {
            throw new Error("Client already exists")
        }
        const res = await this.clientRepository.create({ username, password })
        return res;
    }
}

export { CreateClientUseCase };
