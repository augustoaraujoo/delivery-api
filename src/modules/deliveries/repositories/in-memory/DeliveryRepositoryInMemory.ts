import { Delivery } from '../../../../modules/deliveries/entities/Delivery';
import { IDelivery } from '../IDelivery';
import { DeliveryDTO } from '../../../../modules/deliveries/dtos/DeliveryDTO';
export class DeliveryRepositoryInMemory implements IDelivery {
    delivery: Delivery[] = []
    async findAllDeliveries(): Promise<any> {
        return this.delivery.map(delivery => {
            return {
                item_name: delivery.item_name,
                id_client: delivery.id_client
            }
        });
    }

    async createDelivery({ item_name, id_client }: DeliveryDTO): Promise<void> {
        const createDelivery = new Delivery();
        Object.assign(createDelivery, { item_name, id_client });
        this.delivery.push(createDelivery);
    }

}