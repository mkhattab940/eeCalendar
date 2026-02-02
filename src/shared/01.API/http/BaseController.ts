import type { Response } from 'express';

export abstract class BaseController {
  protected ok<T>(res: Response, dto?: T) {
    return res.status(200).json(dto || { message: 'Success' });
  }

  protected created(res: Response) {
    return res.sendStatus(201);
  }

  protected clientError(res: Response, message?: string) {
    return res.status(400).json({ message: message || 'Bad Request' });
  }

  protected fail(res: Response, error: string) {
    return res.status(500).json({ message: error });
  }
}