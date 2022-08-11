import { IDeliverymanDTO,IUpdateDeliveryDTO } from "../dtos/IDeliverymanDTO";

interface IDeliverymanRepository {
    create(data: IDeliverymanDTO): Promise<any>;
    findByUsername(username: string): Promise<any>;
    update({ id_delivery, id_deliveryman } : IUpdateDeliveryDTO ): Promise<any>;
}

export { IDeliverymanRepository }
