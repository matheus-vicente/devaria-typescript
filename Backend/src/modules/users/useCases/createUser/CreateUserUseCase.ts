import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { HashProvider } from "../../providers/HashProvider/implementation/HashProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

interface IResponse {
  name: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("Users Repository")
    private usersRepository: UsersRepository,

    @inject("Hash Provider")
    private hashProvider: HashProvider
  ) {}

  async execute({ name, email, password }: IRequest): Promise<IResponse> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("E-mail já cadastrado!");
    }

    const hashedPassword = await this.hashProvider.generate(password);

    const userCreated = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const user: IResponse = {
      name: userCreated.name,
      admin: userCreated.admin,
      created_at: userCreated.created_at,
      updated_at: userCreated.updated_at,
    };

    return user;
  }
}

export { CreateUserUseCase };
