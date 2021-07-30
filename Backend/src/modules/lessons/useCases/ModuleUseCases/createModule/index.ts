import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";
import { CreateModuleController } from "./CreateModuleController";
import { CreateModuleUseCase } from "./CreateModuleUseCase";

export default (): CreateModuleController => {
  const modulesRepository = new ModulesRepository();

  const createModuleUseCase = new CreateModuleUseCase(modulesRepository);

  const createModuleController = new CreateModuleController(
    createModuleUseCase
  );

  return createModuleController;
};
