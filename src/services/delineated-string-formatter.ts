import { Document } from '../interfaces/document';
import { Formatter } from '../interfaces/formatter';
import { BadRequestException } from '../utils/exceptions';

export type DelineatedStringFormatterOptions = {
  lineSeparator: string,
  itemSeparator: string;
};

export class DelineatedStringFormatter implements Formatter {
  parse(str: string, options: DelineatedStringFormatterOptions): Document {
    if (!options.lineSeparator || !options.itemSeparator) {
      throw new BadRequestException(
        'lineSeparator and itemSeparator are required to parse delineated format'
      );
    }

    if (!this.validate(str, options)) {
      throw new BadRequestException('Document is not a valid format');
    }

    const doc: Document = {};
    const lines = str.split(options.lineSeparator);

    // Map storing number of lines having the same name
    const lineNamesCount = new Map<string, number>();

    lines.forEach((line) => {
      if (!line) {
        return;
      }

      const elements = line.split(options.itemSeparator ?? '*');
      const lineName = elements[0];
      const index = (lineNamesCount.get(lineName) ?? 0) + 1;
      lineNamesCount.set(lineName, index);

      // Add an index in line ID to allow multiple lines with the same name
      const lineId = `${lineName}_${index}`;

      doc[lineId] = {};

      for (let i = 1; i < elements.length; i++) {
        doc[lineId][`${lineName}${i}`] = elements[i];
      }
    });

    // Clean up redundant index
    return this.cleanDocument(doc, lineNamesCount);
  }

  stringify(
    document: Document,
    options: DelineatedStringFormatterOptions,
  ): string {
    if (!options.lineSeparator || !options.itemSeparator) {
      throw new BadRequestException(
        'lineSeparator and itemSeparator are required to stringify delineated format'
      );
    }

    let result = '';

    Object.keys(document).forEach((lineKey) => {
      result += this.lineNameWithoutIndex(lineKey);

      const line = document[lineKey];

      Object.values(line).forEach((item) => {
        result = result + options.itemSeparator + item;
      });

      result += options.lineSeparator;
    });

    return result;
  }

  /*
  Clean up redundant index from line name while preserving its order in the document
  For example, POC(1) will be simplified to POC if there is only one instance
   */
  private cleanDocument(document: Document, lineNamesCount: Map<string, number>): Document {
    return Object.keys(document).reduce((result, lineName) => {
      const lineNameWoIndex = this.lineNameWithoutIndex(lineName);
      const lineNameCount = lineNamesCount.get(lineNameWoIndex) ?? 0;

      if (lineNameCount > 1) {
        result[lineName] = document[lineName];
      } else {
        result[lineNameWoIndex] = document[lineName];
      }

      return result;
    }, {} as Document);
  }

  /*
  Remove index from a line name
  E.g. POC(1) -> POC
   */
  private lineNameWithoutIndex(lineName: string) {
    const openParenthesesIndex = lineName.indexOf('_');
    return lineName.substr(
      0,
      openParenthesesIndex > 0 ? openParenthesesIndex : lineName.length,
    );
  }

  private validate(str: string, options: DelineatedStringFormatterOptions): boolean {
    return str.includes(options.lineSeparator) && str.includes(options.itemSeparator);
  }
}
