import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  handle(request: Request, response: Response): Response {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const specificatonList = listSpecificationsUseCase.execute();
    return response.status(200).json(specificatonList);
  }
}
export { ListSpecificationsController };
