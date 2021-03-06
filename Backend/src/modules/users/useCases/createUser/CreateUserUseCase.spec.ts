import { AppError } from "../../../../errors/AppError";
import { FakeHashProvider } from "../../providers/HashProvider/fake/FakeHashProvider";
import { FakeUsersRepository } from "../../repositories/fakes/FakeUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

let hashProvider: FakeHashProvider;
let usersRepository: FakeUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    usersRepository = new FakeUsersRepository();
    hashProvider = new FakeHashProvider();

    createUserUseCase = new CreateUserUseCase(usersRepository, hashProvider);
  });

  it("Should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "Matheus Vicente",
      email: "matheus@email.com",
      password: "123123123",
    });

    expect(user).toHaveProperty("id");
  });

  it("Should not be able to create an user with same email", async () => {
    await createUserUseCase.execute({
      name: "Matheus Vicente",
      email: "matheus@email.com",
      password: "123123123",
    });

    await expect(
      createUserUseCase.execute({
        name: "Renato Vicente",
        email: "matheus@email.com",
        password: "123123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
