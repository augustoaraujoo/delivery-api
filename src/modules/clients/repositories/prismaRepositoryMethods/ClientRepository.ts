import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { IClientDTO } from "../../dtos/IClientDTO";
import { IClientRepository } from "../IClientRepository";

class ClientRepository implements IClientRepository {

    async create({ password, username }: IClientDTO): Promise<any> {
        const hashedPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashedPassword
            }
        })
        return client;
    }

    async findFirst(username: string): Promise<any> {
        const client = await prisma.clients.findFirst({
            where: {
                username:{
                    equals: username,
                    mode: "insensitive"
                }
            }
        })
        return client;
    }
}

export { ClientRepository }