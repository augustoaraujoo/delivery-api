import { DeliveryDTO } from "../dtos/DeliveryDTO";

export interface IDelivery {
    createDelivery({ item_name, id_client }: DeliveryDTO): Promise<void>;
}
