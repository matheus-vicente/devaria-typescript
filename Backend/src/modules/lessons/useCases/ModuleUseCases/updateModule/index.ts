import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";
import { UpdateModuleController } from "./UpdateModuleController";
import { UpdateModuleUseCase } from "./UpdateModuleUseCase";

export default (): UpdateModuleController => {
  const modulesRepository = new ModulesRepository();

  const updateModuleUseCase = new UpdateModuleUseCase(modulesRepository);

  const updateModuleController = new UpdateModuleController(
    updateModuleUseCase
  );

  return updateModuleController;
};
