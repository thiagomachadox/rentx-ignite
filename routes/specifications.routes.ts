import { Router } from "express";

import { createSpecificationController } from "../src/modules/cars/usecases/CreateSpecification";
import { listSpecificationsController } from "../src/modules/cars/usecases/ListSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };