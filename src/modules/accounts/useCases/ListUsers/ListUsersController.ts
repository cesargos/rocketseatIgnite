import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(ListUsersUseCase);
    const users = await createUserUseCase.execute();
    return response.status(201).json(users);
  }
}

export { ListUsersController };
