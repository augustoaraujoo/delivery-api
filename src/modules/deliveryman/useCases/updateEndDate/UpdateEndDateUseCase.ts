import { DeliverymanRepository } from "../../repositories/prismaRepository/DeliverymanRepository";


interface IRequest {
    id_delivery: string;
    id_deliveryman: string;
}

class UpdateEndDateUseCase {
    constructor(private deliverymanRepository: DeliverymanRepository) { }
    async execute({ id_delivery, id_deliveryman, }: IRequest): Promise<any> {
        const result = await this.deliverymanRepository.updateEndDate({id_delivery, id_deliveryman});
        return result;
    }
}

export { UpdateEndDateUseCase };