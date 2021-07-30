import { Module } from "../../../entities/Module";
import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";

class ListAllModulesUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute(): Promise<Module[]> {
    const modules = await this.modulesRepository.list();

    return modules;
  }
}

export { ListAllModulesUseCase };
