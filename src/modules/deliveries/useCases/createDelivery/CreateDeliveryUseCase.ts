import { prisma } from "../../../../database/prismaClient";

interface IRequest {
    item_name: string;
    id_client: string;
}

class CreateDeliveryUseCase {

    async execute({ id_client, item_name }: IRequest): Promise<any> {
      const delivery = await prisma.deliveries.create({
        data: {
          item_name,
          id_client
        }
      })
      return delivery;
    }
}

export { CreateDeliveryUseCase };