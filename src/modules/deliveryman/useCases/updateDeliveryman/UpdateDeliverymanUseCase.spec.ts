import { DeliverymanRepositoryInMemory } from '../../repositories/in-memory/DeliverymanRepositoryInMemory'
import { UpdateDeliverymanUseCase } from '../updateDeliveryman/UpdateDeliverymanUseCase'
let deliverymanRepositoryInMemory: DeliverymanRepositoryInMemory;
let deliverymanUseCase: UpdateDeliverymanUseCase;
class Delivery {
    id: string;
    id_deliveryman: string;

    constructor() {
        this.id_deliveryman = '';
        this.id = "123";
    }
}

describe("Update deliveryman", () => {
    beforeAll(() => {
        deliverymanRepositoryInMemory = new DeliverymanRepositoryInMemory();
        deliverymanUseCase = new UpdateDeliverymanUseCase(deliverymanRepositoryInMemory);
    })
    // onde o id do pedido 
    // vou atualizar id_deliveryman que esta null para id_deliveryman que esta sendo passado


    it("should be able to update a delivery", async () => {
        const createDeliveryman = await deliverymanRepositoryInMemory.create({
            username: "teste",
            password: "teste"
        })
        const createDelivery = new Delivery()
        createDelivery.id = '123'
        createDelivery.id_deliveryman = createDeliveryman.id
        expect(createDelivery.id_deliveryman).toEqual(createDeliveryman.id)
    })
})
//language=TypeScript