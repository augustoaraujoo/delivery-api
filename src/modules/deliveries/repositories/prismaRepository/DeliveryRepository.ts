import { DeliveryDTO } from '../../../../modules/deliveries/dtos/DeliveryDTO';
import { prisma } from '../../../../database/prismaClient';
import { IDelivery } from '../IDelivery';
export class DeliveryRepository implements IDelivery {
    async findAllDeliveries(id_client: string): Promise<any> {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client
            },
            select: {
                Deliveries: true,
                id:true,
                username:true,
            }
        })
        return deliveries;
    }

    async createDelivery({ item_name, id_client }: DeliveryDTO): Promise<void> {
        await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })
    }
}