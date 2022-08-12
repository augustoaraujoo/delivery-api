import { hash } from "bcrypt";
import { IRequest } from "../../../../interface/Interface";
import { DeliverymanRepository } from "../../repositories/prismaRepository/DeliverymanRepository";


class CreateDeliverymanUseCase {
    constructor(private deliverymanRepository: DeliverymanRepository) { }
    async execute({ username, password }: IRequest): Promise<any> {
        const deliverymanExists = await this.deliverymanRepository.findByUsername(username);
        if (deliverymanExists) {
            throw new Error("Deliveryman already exists")
        }
        const hashedPassword = await hash(password, 10);
        const deliveryman = await this.deliverymanRepository.create({ username, password: hashedPassword });
        return deliveryman;
    }
}

export { CreateDeliverymanUseCase };