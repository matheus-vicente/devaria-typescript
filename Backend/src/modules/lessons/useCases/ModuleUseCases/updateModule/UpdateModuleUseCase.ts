import { AppError } from "../../../../../errors/AppError";
import { Module } from "../../../entities/Module";
import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";

interface IRequest {
  id: string;
  name: string;
}

class UpdateModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute({ name, id }: IRequest): Promise<Module> {
    const moduleNameAlreadyExists = await this.modulesRepository.findByName(
      name
    );

    if (moduleNameAlreadyExists) {
      throw new AppError("Já existe um módulo com este nome");
    }

    const module = await this.modulesRepository.findById(id);

    module.name = name;

    const updatedModule = await this.modulesRepository.save(module);

    return updatedModule;
  }
}

export { UpdateModuleUseCase };
