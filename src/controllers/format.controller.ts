import { Request, Response } from 'express';
import { FormatOptions } from '../interfaces/format-options';
import { CoreFormatter } from '../services/core-formatter';
import { contentTypeFromFormat } from '../utils/content-type';

const coreFormatter = new CoreFormatter();

export const formatController = {
  format: (req: Request, res: Response): Response => {
    const { from, to, value } = req.body as { from: FormatOptions, to: FormatOptions, value: string };
    const doc = coreFormatter.parse(value, from);
    const result = coreFormatter.stringify(doc, to);

    const contentType = contentTypeFromFormat(to.format);

    return res.set('Content-Type', contentType).status(200).send(result);
  }
};


