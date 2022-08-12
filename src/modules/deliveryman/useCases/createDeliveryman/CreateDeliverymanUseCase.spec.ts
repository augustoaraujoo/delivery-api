import { DeliverymanRepositoryInMemory } from '../../repositories/in-memory/DeliverymanRepositoryInMemory'
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase'
let deliverymanRepositoryInMemory: DeliverymanRepositoryInMemory;
let deliverymanUseCase: CreateDeliverymanUseCase;

describe("Deliveryman", () => {
    beforeAll(() => {
        deliverymanRepositoryInMemory = new DeliverymanRepositoryInMemory();
        deliverymanUseCase = new CreateDeliverymanUseCase(deliverymanRepositoryInMemory);
    })
    it("should be able to create a new Deliveryman", async () => {
        const deliveryman = await deliverymanUseCase.execute({
            username: "test",
            password: "test123"
        })
        expect(deliveryman).toHaveProperty("id");
    }
    )
    it("should not be able to create a new Deliveryman with the same username", async () => {
        expect(async () => {
            await deliverymanUseCase.execute({
                username: "test",
                password: "test1231"
            })
            await deliverymanUseCase.execute({
                username: "test",
                password: "test1233"
            })
        }).rejects.toThrowError("Deliveryman already exists");
    })
})
//language=TypeScript