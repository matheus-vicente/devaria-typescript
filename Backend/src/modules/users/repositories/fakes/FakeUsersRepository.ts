import { v4 as uuidV4 } from "uuid";

import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      ...data,
      id: uuidV4(),
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  public async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  public async save(user: User): Promise<User> {
    const index = this.users.findIndex((item) => item.id === user.id);

    this.users[index] = user;

    return user;
  }

  public async list(): Promise<User[]> {
    return this.users;
  }
}

export { FakeUsersRepository };
