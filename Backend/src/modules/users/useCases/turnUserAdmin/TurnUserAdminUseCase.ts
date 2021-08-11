import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError("Usuário não existente");
    }

    userExists.admin = true;

    const user = await this.usersRepository.save(userExists);

    return user;
  }
}

export { TurnUserAdminUseCase };
