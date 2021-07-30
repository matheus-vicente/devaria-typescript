import { getRepository, Repository } from "typeorm";

import { Module } from "../../entities/Module";
import { IModulesRepository } from "../IModulesRepository";

class ModulesRepository implements IModulesRepository {
  private ormRepository: Repository<Module>;

  constructor() {
    this.ormRepository = getRepository(Module);
  }

  create(name: string): Module {
    const module = this.ormRepository.create({
      name,
    });

    return module;
  }

  async delete(module: Module): Promise<void> {
    await this.ormRepository.remove(module);
  }

  async findById(id: string): Promise<Module> {
    const module = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return module;
  }

  async findByName(name: string): Promise<Module> {
    const module = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return module;
  }

  async list(): Promise<Module[]> {
    const modules = await this.ormRepository.find();

    return modules;
  }

  async save(module: Module): Promise<Module> {
    const savedModule = await this.ormRepository.save(module);

    return savedModule;
  }
}

export { ModulesRepository };
