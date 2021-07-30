import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    const createdUser = await this.ormRepository.save(user);

    return createdUser;
  }

  public async findById(id: string): Promise<User> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async save(data: User): Promise<User> {
    const user = await this.ormRepository.save(data);

    return user;
  }

  public async list(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }
}

export { UsersRepository };
