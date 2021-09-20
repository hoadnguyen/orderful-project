import { expect } from 'chai';
import { BadRequestException } from '../utils/exceptions';
import { DELINEATED_STRING_EXAMPLE, DOC_EXAMPLE } from '../utils/test-data';
import { DelineatedStringFormatter, DelineatedStringFormatterOptions } from './delineated-string-formatter';

describe('DelineatedStringFormatter', () => {
  const formatter = new DelineatedStringFormatter();

  describe('parse', () => {
    it('should throw BadRequestException if lineSeparator and itemSeparator are undefined', () => {
      const fn = () => formatter.parse(DELINEATED_STRING_EXAMPLE, {} as DelineatedStringFormatterOptions);
      expect(fn).to.throw(BadRequestException);
    });

    it('should throw BadRequestException if lineSeparator and itemSeparator are undefined', () => {
      const fn = () => formatter.parse(DELINEATED_STRING_EXAMPLE.replace(/~/g, ''), {
        lineSeparator: '~',
        itemSeparator: '*',
      });
      expect(fn).to.throw(BadRequestException);
    });

    it('should parse to correct document structure', () => {
      const doc = formatter.parse(DELINEATED_STRING_EXAMPLE, {
        lineSeparator: '~',
        itemSeparator: '*',
      });

      expect(doc).to.eql(DOC_EXAMPLE);
    });
  });

  describe('stringify', () => {
    it('should throw BadRequestException if lineSeparator and itemSeparator are undefined', () => {
      const fn = () => formatter.stringify(DOC_EXAMPLE, {} as DelineatedStringFormatterOptions);
      expect(fn).to.throw(BadRequestException);
    });

    it('should convert document to correct string', () => {
      const str = formatter.stringify(DOC_EXAMPLE, {
        lineSeparator: '~',
        itemSeparator: '*',
      });

      expect(str).to.eql(DELINEATED_STRING_EXAMPLE);
    });
  });
});
