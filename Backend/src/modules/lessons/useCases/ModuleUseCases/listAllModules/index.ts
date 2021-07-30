import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";
import { ListAllModulesController } from "./ListAllModulesController";
import { ListAllModulesUseCase } from "./ListAllModulesUseCase";

export default (): ListAllModulesController => {
  const modulesRepository = new ModulesRepository();

  const listAllModulesUseCase = new ListAllModulesUseCase(modulesRepository);

  const listAllModulesController = new ListAllModulesController(
    listAllModulesUseCase
  );

  return listAllModulesController;
};
