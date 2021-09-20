import { NextFunction, Request, Response } from 'express';
import { Format } from '../enum/format';
import { FormatOptions } from '../interfaces/format-options';
import { BadRequestException } from '../utils/exceptions';

const validateOptions = (options: FormatOptions): void => {
  const { format, itemSeparator, lineSeparator } = options;

  if (format !== Format.Delineated &&
    format !== Format.Json &&
    format !== Format.Xml) {
    throw new BadRequestException('Invalid Format');
  }

  if (format === Format.Delineated && (!lineSeparator || !itemSeparator)) {
    throw new BadRequestException('Delineated Format requires lineSeparator and itemSeparator specified');
  }
};

const validateValue = (val: unknown): void => {
  if (typeof val === 'string' || val instanceof String) {
    return;
  }
  throw new BadRequestException('Value must be a string');
};

export const formatReqValidator = {
  validate: (req: Request, res: Response, next: NextFunction): void => {
    const { from, to, value } = req.body;
    validateOptions(from);
    validateOptions(to);
    validateValue(value);

    next();
  }
};
