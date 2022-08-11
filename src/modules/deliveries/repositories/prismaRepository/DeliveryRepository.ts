import { DeliveryDTO } from '../../../../modules/deliveries/dtos/DeliveryDTO';
import { prisma } from '../../../../database/prismaClient';
import { IDelivery } from '../IDelivery';
export class DeliveryRepository implements IDelivery {

    async createDelivery({item_name, id_client}:DeliveryDTO): Promise<void> {
         await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })
    }
}