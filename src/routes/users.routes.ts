import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/usecases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/usecases/UpdateUserAvatar/UpdateUserAvatarController";

import uploadConfig from "../config/upload";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "./avatar",
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { usersRoutes };
