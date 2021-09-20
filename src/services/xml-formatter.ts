import * as parser from 'fast-xml-parser';
import { Document } from '../interfaces/document';
import { Formatter } from '../interfaces/formatter';
import { BadRequestException } from '../utils/exceptions';

export class XmlFormatter implements Formatter {
  parse(xml: string): Document {
    if (parser.validate(xml)) {
      const parsed = parser.parse(xml, {
        parseNodeValue: false,
        // disable value trimming.
        // Side effect: creates <#text> node indicating spaces and linebreaks
        trimValues: false,
      });

      if (!parsed.root) {
        throw new BadRequestException('Invalid XML Input');
      }

      return this.removeTextNodes(parsed.root);
    } else {
      throw new BadRequestException('Invalid XML Input');
    }
  }

  stringify(doc: Document): string {
    const j2x = new parser.j2xParser({
      format: true,
      indentBy: '',
    });
    return `<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n${j2x.parse(doc)}</root>`;
  }

  /*
  Remove default #text node inserted by XML parser library
   */
  private removeTextNodes(document: Document): Document {
    return Object.keys(document).reduce((result, key) => {
      if (key === '#text') {
        return result;
      }

      const val = {...document[key]};
      delete val['#text'];
      result[key] = val;

      return result;
    }, {} as Document);
  }
}
