import { Document } from '../interfaces/document';
import { Formatter } from '../interfaces/formatter';
import { BadRequestException } from '../utils/exceptions';

export class JsonFormatter implements Formatter {
  parse(json: string): Document {
    try {
      return JSON.parse(json);
    } catch (e) {
      throw new BadRequestException('Invalid JSON Input');
    }
  }

  stringify(document: Document): string {
    return JSON.stringify(document);
  }
}
