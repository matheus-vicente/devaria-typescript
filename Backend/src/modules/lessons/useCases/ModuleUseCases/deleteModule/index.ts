import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";
import { DeleteModuleController } from "./DeleteModuleController";
import { DeleteModuleUseCase } from "./DeleteModuleUseCase";

export default (): DeleteModuleController => {
  const modulesRepository = new ModulesRepository();

  const deleteModuleUseCase = new DeleteModuleUseCase(modulesRepository);

  const deleteModuleController = new DeleteModuleController(
    deleteModuleUseCase
  );

  return deleteModuleController;
};
