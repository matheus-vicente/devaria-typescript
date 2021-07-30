import { AppError } from "../../../../../errors/AppError";
import { Module } from "../../../entities/Module";
import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";

interface IRequest {
  name: string;
}

class CreateModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute({ name }: IRequest): Promise<Module> {
    const moduleAlreadyExists = await this.modulesRepository.findByName(name);

    if (moduleAlreadyExists) {
      throw new AppError("Já existe um módulo com este nome");
    }

    const createdModule = this.modulesRepository.create(name);

    const module = await this.modulesRepository.save(createdModule);

    return module;
  }
}

export { CreateModuleUseCase };
