import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { IRequest } from "../../../../interface/Interface";

class CreateClientUseCase {
    async execute({ username, password }: IRequest): Promise<any> {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if (clientExists) {
            throw new Error("Client already exists")
        }
        const hashedPassword = await hash(password, 10);
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashedPassword
            }
        })
        return client;
    }
}

export { CreateClientUseCase };