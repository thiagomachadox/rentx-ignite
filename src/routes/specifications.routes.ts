import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

import { CreateSpecificationController } from "../modules/cars/usecases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/usecases/ListSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);
specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };
