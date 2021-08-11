import { AppError } from "../../../../errors/AppError";
import { FakeHashProvider } from "../../providers/HashProvider/fake/FakeHashProvider";
import { FakeUsersRepository } from "../../repositories/fakes/FakeUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let hashProvider: FakeHashProvider;
let usersRepository: FakeUsersRepository;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    hashProvider = new FakeHashProvider();
    usersRepository = new FakeUsersRepository();

    createUserUseCase = new CreateUserUseCase(usersRepository, hashProvider);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepository,
      hashProvider
    );
  });

  it("Should be able to authenticate user", async () => {
    const user = await createUserUseCase.execute({
      name: "Matheus Vicente",
      email: "matheus@email.com",
      password: "123123123",
    });

    const authenticated = await authenticateUserUseCase.execute({
      email: "matheus@email.com",
      password: "123123123",
    });

    expect(authenticated).toHaveProperty("token");
    expect(authenticated.user).toEqual(user);
  });

  it("Should not be able to authenticated an user whit wrong credentials", async () => {
    await createUserUseCase.execute({
      name: "Matheus Vicente",
      email: "matheus@email.com",
      password: "123123123",
    });

    await expect(
      authenticateUserUseCase.execute({
        email: "matheus@email.com",
        password: "123123124",
      })
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      authenticateUserUseCase.execute({
        email: "emailmatheus@email.com",
        password: "123123124",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate as user with an unexistent user", async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: "matheus@email.com",
        password: "123123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
