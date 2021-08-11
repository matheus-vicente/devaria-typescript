import { AppError } from "../../../../errors/AppError";
import { FakeHashProvider } from "../../providers/HashProvider/fake/FakeHashProvider";
import { FakeUsersRepository } from "../../repositories/fakes/FakeUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

let hashProvider: FakeHashProvider;
let usersRepository: FakeUsersRepository;
let createUserUseCase: CreateUserUseCase;
let turnUserAdminUseCase: TurnUserAdminUseCase;

describe("Turn User Admin", () => {
  beforeEach(() => {
    hashProvider = new FakeHashProvider();
    usersRepository = new FakeUsersRepository();

    createUserUseCase = new CreateUserUseCase(usersRepository, hashProvider);
    turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
  });

  it("Should be able to turn user in admin", async () => {
    const user = await createUserUseCase.execute({
      name: "Matheus Vicente",
      email: "matheus@email.com",
      password: "123123123",
    });

    const userBecomeAdmin = await turnUserAdminUseCase.execute(user.id);

    expect(userBecomeAdmin.admin).toEqual(true);
  });

  it("Should not be able to turn an unexistent user in admin", async () => {
    await expect(
      turnUserAdminUseCase.execute("id_not_valid")
    ).rejects.toBeInstanceOf(AppError);
  });
});
