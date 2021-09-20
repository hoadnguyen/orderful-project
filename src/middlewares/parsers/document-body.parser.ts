import { NextFunction, Request, Response } from 'express';
import { formatFromHeaderType } from '../../utils/content-type';
import { BadRequestException } from '../../utils/exceptions';

export const documentBodyParser = {
  parse: (req: Request, res: Response, next: NextFunction): void => {
    const contentType = req.header('Content-Type');
    const acceptType = req.header('Accept');

    if (!contentType || !acceptType) {
      throw new BadRequestException('Missing Content-Type or Accept headers');
    }

    const fromFormat = formatFromHeaderType(contentType);
    const toFormat = formatFromHeaderType(acceptType);

    const { itemSeparator, lineSeparator } = req.query;
    const document = req.body as string;

    req.body = {
      from: {
        format: fromFormat,
        itemSeparator: itemSeparator as string,
        lineSeparator: lineSeparator as string,
      },
      to: {
        format: toFormat,
        itemSeparator: itemSeparator as string,
        lineSeparator: lineSeparator as string,
      },
      document,
    };

    return next();
  },
};
