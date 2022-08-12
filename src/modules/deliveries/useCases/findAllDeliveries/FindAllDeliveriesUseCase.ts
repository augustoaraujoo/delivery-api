import { DeliveryRepository } from "../../repositories/prismaRepository/DeliveryRepository";

class FindAllDeliveriesUseCase {
    constructor(private deliveriesRepository: DeliveryRepository) { }
    
    async execute(id_client: string): Promise<any> {
        const deliveries = await this.deliveriesRepository.findAllDeliveries(
            id_client
        );
        return deliveries;
    }
}

export { FindAllDeliveriesUseCase };