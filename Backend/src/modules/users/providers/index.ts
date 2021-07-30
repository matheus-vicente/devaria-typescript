import { container } from "tsyringe";

import { HashProvider } from "./HashProvider/implementation/HashProvider";
import { IHashProvider } from "./HashProvider/model/IHashProvider";

container.registerSingleton<IHashProvider>("Hash Provider", HashProvider);
