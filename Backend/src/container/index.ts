import { container } from "tsyringe";

import "../modules/users/providers";

import { ILessonsRepository } from "../modules/lessons/repositories/ILessonsRepository";
import { IModulesRepository } from "../modules/lessons/repositories/IModulesRepository";
import { LessonsRepository } from "../modules/lessons/repositories/implementations/LessonsRepository";
import { ModulesRepository } from "../modules/lessons/repositories/implementations/ModulesRepository";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "Users Repository",
  UsersRepository
);

container.registerSingleton<ILessonsRepository>(
  "Lessons Repository",
  LessonsRepository
);

container.registerSingleton<IModulesRepository>(
  "Modules Repository",
  ModulesRepository
);
