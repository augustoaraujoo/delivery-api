import { prisma } from "../../../../database/prismaClient";
import { DeliveryRepository } from '../../repositories/prismaRepository/DeliveryRepository';

interface IRequest {
  item_name: string;
  id_client: string;
}

class CreateDeliveryUseCase {
  constructor(private deliveryRepository: DeliveryRepository) {

  }
  async execute({ id_client, item_name }: IRequest): Promise<any> {
    const delivery = await this.deliveryRepository.createDelivery({ item_name, id_client });
    return delivery;
  }
}

export { CreateDeliveryUseCase };