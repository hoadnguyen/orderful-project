import { Format } from '../enum/format';
import { Document } from '../interfaces/document';
import { FormatOptions } from '../interfaces/format-options';
import { Formatter } from '../interfaces/formatter';
import { BadRequestException } from '../utils/exceptions';
import { DelineatedStringFormatter } from './delineated-string-formatter';
import { JsonFormatter } from './json-formatter';
import { XmlFormatter } from './xml-formatter';

export class CoreFormatter {
  constructor(
    private readonly delineatedFormatter: Formatter = new DelineatedStringFormatter(),
    private readonly jsonFormatter: Formatter = new JsonFormatter(),
    private readonly xmlFormatter: Formatter = new XmlFormatter(),
  ) {}

  parse(str: string, options: FormatOptions): Document {
    const formatter = this.formatterOf(options.format);
    return formatter.parse(str, options);
  }

  stringify(doc: Document, options: FormatOptions): string {
    const formatter = this.formatterOf(options.format);
    return formatter.stringify(doc, options);
  }

  private formatterOf(format: Format): Formatter {
    switch (format) {
    case Format.Delineated:
      return this.delineatedFormatter;
    case Format.Json:
      return this.jsonFormatter;
    case Format.Xml:
      return this.xmlFormatter;
    default:
      throw new BadRequestException(`Format ${format} is not supported`);
    }
  }
}
