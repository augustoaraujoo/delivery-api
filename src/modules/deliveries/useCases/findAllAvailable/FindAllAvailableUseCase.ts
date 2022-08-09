import { prisma } from "../../../../database/prismaClient";

class FindAllAvailableUseCase {

    async execute(): Promise<any> {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_date: null,
                id_deliveryman: null
            }
        })
        return deliveries;
    }
}

export { FindAllAvailableUseCase };