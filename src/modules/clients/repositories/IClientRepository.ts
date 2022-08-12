import { IClientDTO } from "../dtos/IClientDTO";

interface IClientRepository {
    create(data: IClientDTO): Promise<any>;
    findFirst(username: string): Promise<any>;
}

export { IClientRepository };