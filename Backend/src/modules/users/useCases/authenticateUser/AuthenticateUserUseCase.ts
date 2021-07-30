import { sign } from "jsonwebtoken";

import { jwt } from "../../../../config/authConfig";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { HashProvider } from "../../providers/HashProvider/implementation/HashProvider";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Combinação de credenciais incorreta!");
    }

    const passwordMatch = await this.hashProvider.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new AppError("Combinação de credenciais incorreta!");
    }

    const { expiresIn, secret } = jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserUseCase };
