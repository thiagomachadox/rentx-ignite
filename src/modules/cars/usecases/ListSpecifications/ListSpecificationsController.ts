import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { container } from "tsyringe";

class ListSpecificationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationsUseCase = container.resolve(
            ListSpecificationsUseCase
        );
        const data = await listSpecificationsUseCase.execute();

        return response.json(data);
    }
}

export { ListSpecificationsController };
