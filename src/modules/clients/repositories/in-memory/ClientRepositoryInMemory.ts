import { IClientDTO } from "../../dtos/IClientDTO";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../IClientRepository";

class ClientRepositoryInMemory implements IClientRepository {
    clients: Client[] = []
    async create({ password, username }: IClientDTO): Promise<any> {
        const client = new Client();
        Object.assign(client, {
            username,
            password
        });
        this.clients.push(client);
        return client;
    }
    async findFirst(username: string): Promise<any> {
        return this.clients.find(client => client.username === username);
    }

}
export { ClientRepositoryInMemory }