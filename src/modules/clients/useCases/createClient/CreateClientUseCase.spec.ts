import { ClientRepositoryInMemory } from "../../repositories/in-memory/ClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";

let clientRepositoryInMemory: ClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("CreateClientUseCase", () => {
    beforeAll(() => {
        clientRepositoryInMemory = new ClientRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientRepositoryInMemory);
    })
    it("should create a client", async () => {
        const client = await createClientUseCase.execute({
            username: "test",
            password: "test"
        });
        expect(client).toHaveProperty("id");
    })

    it("should not create a client with the same username", async () => {
        expect(async () => {
            await createClientUseCase.execute({
                username: "test",
                password: "test321"
            });
            await createClientUseCase.execute({
                username: "test",
                password: "test123"
            });
        }).rejects.toThrowError("Client already exists");
    })
})
// Language: typescript