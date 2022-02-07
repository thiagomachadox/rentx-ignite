import { Router } from "express";

import { CreateSpecificationController } from "../src/modules/cars/usecases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../src/modules/cars/usecases/ListSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };
