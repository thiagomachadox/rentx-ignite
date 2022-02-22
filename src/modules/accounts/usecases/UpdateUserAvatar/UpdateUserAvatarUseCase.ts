import { request } from "express";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { deleteFile } from "../../../../utils/file";

interface IRequest {
    userId: string;
    avatarFile: string;
}

// Adicionar coluna avatar na tabela de Users
// Refatorar usuário com coluna avatar
// Configuracao upload multer
// Criar a regra de negócio do upload
// Criar controller

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ userId, avatarFile }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(userId);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatarFile;

        await this.usersRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
