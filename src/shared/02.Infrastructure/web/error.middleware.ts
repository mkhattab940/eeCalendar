import type { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error(`[Error]: ${err.stack}`);

  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    // Only show stack traces in development mode
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};