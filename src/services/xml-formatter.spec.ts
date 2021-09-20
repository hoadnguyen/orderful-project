import { expect } from 'chai';
import { BadRequestException } from '../utils/exceptions';
import { DOC_EXAMPLE, XML_EXAMPLE } from '../utils/test-data';
import { XmlFormatter } from './xml-formatter';

describe('XML Formatter', () => {
  const formatter = new XmlFormatter();

  describe('parse', () => {
    it('should throw BadRequestException if xml document is malformed', () => {
      const fn = () => formatter.parse(XML_EXAMPLE.replace(/</g, '**'));
      expect(fn).to.throw(BadRequestException);
    });

    it('should throw BadRequestException if xml document does not have root node', () => {
      const xml = XML_EXAMPLE
        .replace('<root>', '')
        .replace('</root>', '');
      const fn = () => formatter.parse(xml);
      expect(fn).to.throw(BadRequestException);
    });

    it('should parse to correct document structure', () => {
      const doc = formatter.parse(XML_EXAMPLE);
      expect(doc).to.eql(DOC_EXAMPLE);
    });
  });

  describe('stringify', () => {
    it('should convert document to correct xml', () => {
      const xml = formatter.stringify(DOC_EXAMPLE);
      expect(xml).to.eql(XML_EXAMPLE);
    });
  });
});
