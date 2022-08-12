
import { IDeliverymanDTO, IUpdateDeliveryDTO } from "../../dtos/IDeliverymanDTO";
import { Deliveryman } from "../../entities/Deliveryman";
import { IDeliverymanRepository } from "../IDeliverymanRepository";
import { v4 as uuidV4 } from 'uuid';

/*           */
/*           */
class Delivery {
    id?: string;
    id_deliveryman?: string;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
/*           */
/*           */

class DeliverymanRepositoryInMemory implements IDeliverymanRepository {

    //entities
    deliveryman: Deliveryman[] = [];
    delivery: Delivery[] = [];
    async create({ username, password }: IDeliverymanDTO): Promise<any> {
        const deliveryman = new Deliveryman();
        Object.assign(deliveryman, { username, password });
        this.deliveryman.push(deliveryman)
        return deliveryman
    }
    async findByUsername(username: string): Promise<any> {
        const findByUsername = this.deliveryman.find(deliveryman => deliveryman.username === username);
        return findByUsername;
    }
    async update({ id_delivery, id_deliveryman }: IUpdateDeliveryDTO): Promise<any> {

        // onde o id do pedido 
        // vou atualizar id_deliveryman que esta null para id_deliveryman que esta sendo passado
        const delivery = new Delivery()
        const result = await this.delivery.find(delivery => delivery.id === id_delivery);
        if (result) {
            Object.assign(result, { id: id_delivery, id_deliveryman: id_deliveryman });
            this.delivery.push(result);
        }
        return delivery;
    }
    async updateEndDate({ id_delivery, id_deliveryman }: IUpdateDeliveryDTO): Promise<any> {
        const result = this.delivery.find(delivery => delivery.id === id_delivery);
        if (result) {
            Object.assign(result, { id: id_delivery, id_deliveryman: id_deliveryman, end_date: new Date() });
            this.delivery.push(result);
        }

        return result
    }
}

export { DeliverymanRepositoryInMemory }