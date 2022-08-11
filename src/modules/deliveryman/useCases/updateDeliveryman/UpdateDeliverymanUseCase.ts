import { DeliverymanRepository } from "../../repositories/prismaRepository/DeliverymanRepository";


interface IRequest {
    id_delivery: string;
    id_deliveryman: string;
}

class UpdateDeliverymanUseCase {
    constructor(private deliverymanRepository: DeliverymanRepository) { }
    async execute({ id_delivery, id_deliveryman }: IRequest): Promise<any> {
        const result = await this.deliverymanRepository.update({id_delivery, id_deliveryman});
        return result;
    }
}

export { UpdateDeliverymanUseCase };