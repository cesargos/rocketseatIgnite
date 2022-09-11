import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    try {
      await importCategoryUseCase.execute(file);
      return response.send();
    } catch (error) {
      return response.status(500).json({
        error: error.message,
      });
    }
  }
}

export { ImportCategoryController };
