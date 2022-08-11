
import { prisma } from "../../../../database/prismaClient";
import { IDeliverymanDTO,IUpdateDeliveryDTO } from "../../dtos/IDeliverymanDTO";
import { IDeliverymanRepository } from "../IDeliverymanRepository";

class DeliverymanRepository implements IDeliverymanRepository {
    async create({ username, password }: IDeliverymanDTO): Promise<any> {
        const createDeliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password
            }
        });
        return createDeliveryman
    }
    async findByUsername(username: string): Promise<any> {
        const findDeliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });
        return findDeliveryman;
    }
    async update({ id_delivery, id_deliveryman }: IUpdateDeliveryDTO): Promise<any> {
        const result = await prisma.deliveries.update({
          
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
            }
        })
        return result;
    }

}

export { DeliverymanRepository }