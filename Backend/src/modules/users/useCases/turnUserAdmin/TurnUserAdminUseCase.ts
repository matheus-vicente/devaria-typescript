import { AppError } from "../../../../errors/AppError";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IResponse {
  name: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string): Promise<IResponse> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError("Usuário não existente");
    }

    userExists.admin = true;

    const savedUser = await this.usersRepository.save(userExists);

    const user: IResponse = {
      name: savedUser.name,
      admin: savedUser.admin,
      created_at: savedUser.created_at,
      updated_at: savedUser.updated_at,
    };

    return user;
  }
}

export { TurnUserAdminUseCase };
