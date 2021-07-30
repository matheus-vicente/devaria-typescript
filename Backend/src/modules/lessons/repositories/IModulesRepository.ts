import { Module } from "../entities/Module";

interface IModulesRepository {
  create(name: string): Module;
  delete(module: Module): Promise<void>;
  findById(id: string): Promise<Module>;
  findByName(name: string): Promise<Module>;
  list(): Promise<Module[]>;
  save(module: Module): Promise<Module>;
}

export { IModulesRepository };
