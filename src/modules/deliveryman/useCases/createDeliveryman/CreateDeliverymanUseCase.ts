import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { IRequest } from "../../../../interface/Interface";


class CreateDeliverymanUseCase {

    async execute({ username, password }: IRequest): Promise<any> {
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })
        if (deliverymanExists) {
            throw new Error("Deliveryman already exists")
        }
        const hashedPassword = await hash(password, 10);
        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashedPassword
            }
        })
        return deliveryman;
    }
}

export { CreateDeliverymanUseCase };