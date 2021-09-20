import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BadRequestException } from './exceptions';

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error) {
    return next();
  }

  if (error instanceof BadRequestException) {
    return res.status(400).send({
      error: error.name,
      status: error.status,
      message: error.message,
    });
  }

  return res.status(500).json({
    error: 'Internal Server Error',
    status: 500,
    message: 'An unknown error has occurred',
  });
};
