import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  list(): Promise<User[]>;
  save(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
