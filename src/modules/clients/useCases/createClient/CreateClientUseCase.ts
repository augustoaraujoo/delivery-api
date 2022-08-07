import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
interface IRequest {
    username: string;
    password: string;
}

class CreateClientUseCase {
    // constructor(private createClientUseCase: IcreateClientUseCase) { }

    async execute({ username, password }: IRequest): Promise<any> {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                }
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