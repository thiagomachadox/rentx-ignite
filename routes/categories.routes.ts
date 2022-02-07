import { request, Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../src/modules/cars/usecases/CreateCategory/CreateCategoryController";
import { listCategoriesController } from "../src/modules/cars/usecases/ListCategories";
import { ImportCategoryController } from "../src/modules/cars/usecases/ImportCategory/ImportCategoryController";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoriesRoutes };
