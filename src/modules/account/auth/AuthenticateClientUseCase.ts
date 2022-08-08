import { prisma } from "../../../database/prismaClient";
import { IRequest } from "../../../interface/Interface";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

class AuthenticateClientUseCase {

    async execute({ username, password }: IRequest): Promise<string> {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if (!client) {
            throw new Error("Client not found")
        }
        const passwordIsValid = await compare(password, client.password);
        if (!passwordIsValid) {
            throw new Error("Invalid password")
        }
        const token = sign({ username }, `${process.env.JWT_KEY}`, {
            subject: client.id,
            expiresIn: "1d"
        })
        console.log(token);
        return token
    }
}

export { AuthenticateClientUseCase };