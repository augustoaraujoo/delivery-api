import { prisma } from "../../../../database/prismaClient";

class FindAllAvailableUseCase {

    async execute(): Promise<any> {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_date: null
            }
        })
        return deliveries;
    }
}

export { FindAllAvailableUseCase };