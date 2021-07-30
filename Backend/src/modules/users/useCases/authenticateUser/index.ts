import { HashProvider } from "../../providers/HashProvider/implementation/HashProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
  const usersRepository = new UsersRepository();
  const hashProvider = new HashProvider();
  const authenticateUserUsecase = new AuthenticateUserUseCase(
    usersRepository,
    hashProvider
  );
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUsecase
  );

  return authenticateUserController;
};
