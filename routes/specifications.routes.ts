import { Router } from "express";

import { CreateSpecificationController } from "../src/modules/cars/usecases/CreateSpecification/CreateSpecificationController";
import { listSpecificationsController } from "../src/modules/cars/usecases/ListSpecifications";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
