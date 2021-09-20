import { expect } from 'chai';
import { BadRequestException } from '../utils/exceptions';
import { DOC_EXAMPLE, JSON_EXAMPLE } from '../utils/test-data';
import { JsonFormatter } from './json-formatter';

describe('Json Formatter', () => {
  const formatter = new JsonFormatter();

  describe('parse', () => {
    it('should throw BadRequestException if json document is malformed', () => {
      const fn = () => formatter.parse(JSON_EXAMPLE.replace('{', '**'));
      expect(fn).to.throw(BadRequestException);
    });

    it('should parse to correct document structure', () => {
      const doc = formatter.parse(JSON_EXAMPLE);
      expect(doc).to.eql(DOC_EXAMPLE);
    });
  });

  describe('stringify', () => {
    it('should convert document to correct json', () => {
      const str = formatter.stringify(DOC_EXAMPLE);
      expect(str).to.eql(JSON_EXAMPLE);
    });
  });
});
