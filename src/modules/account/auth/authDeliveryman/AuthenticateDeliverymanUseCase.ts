import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { IRequest } from "../../../../interface/Interface";

class AuthenticateDeliverymanUseCase {

    async execute({ username,password}: IRequest): Promise<any> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })
        if (!deliveryman) {
            throw new Error("deliveryman not found")
        }
        const passwordIsValid = await compare(password, deliveryman.password);
        if (!passwordIsValid) {
            throw new Error("Invalid password")
        }
        const token = sign({ username }, `${process.env.JWT_KEY_DELIVERYMAN}`, {
            subject: deliveryman.id,
            expiresIn: "1d"
        })
        return token
    }
}

export { AuthenticateDeliverymanUseCase };