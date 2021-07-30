import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";

interface IRequest {
  id: string;
}

class DeleteModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const module = await this.modulesRepository.findById(id);

    await this.modulesRepository.delete(module);
  }
}

export { DeleteModuleUseCase };
