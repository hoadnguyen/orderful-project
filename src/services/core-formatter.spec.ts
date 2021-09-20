import { expect, use } from 'chai';
import { Format } from '../enum/format';
import { Document } from '../interfaces/document';
import { Formatter } from '../interfaces/formatter';
import { BadRequestException } from '../utils/exceptions';
import { CoreFormatter } from './core-formatter';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

use(sinonChai);

describe('Core Formatter', () => {
  const sandbox = sinon.createSandbox();
  const mockDelineatedFormatter: Formatter = {
    parse: sandbox.stub().returns({} as Document),
    stringify: sandbox.stub().returns(''),
  };

  const mockJsonFormatter: Formatter = {
    parse: sandbox.stub().returns({} as Document),
    stringify: sandbox.stub().returns(''),
  };

  const mockXmlFormatter: Formatter = {
    parse: sandbox.stub().returns({} as Document),
    stringify: sandbox.stub().returns(''),
  };

  const formatter = new CoreFormatter(
    mockDelineatedFormatter,
    mockJsonFormatter,
    mockXmlFormatter,
  );

  describe('parse', () => {
    beforeEach(() => {
      sandbox.resetHistory();
    });

    it('should throw BadRequestException if format is invalid', () => {
      const fn = () => formatter.parse(
        'doc', 
        { format: 'wrong' as Format }
      );
      expect(fn).to.throw(BadRequestException);
    });

    it('should parse using delineated formatter if Format.Delineated is specified', () => {
      formatter.parse('doc' , { format: Format.Delineated} );
      expect(mockDelineatedFormatter.parse).to.have.been.calledOnce;
    });

    it('should parse using json formatter if Format.Json is specified', () => {
      formatter.parse('doc' , { format: Format.Json} );
      expect(mockJsonFormatter.parse).to.have.been.calledOnce;
    });

    it('should parse using xml formatter if Format.Xml is specified', () => {
      formatter.parse('doc' , { format: Format.Xml} );
      expect(mockXmlFormatter.parse).to.have.been.calledOnce;
    });
  });

  describe('stringify', () => {
    beforeEach(() => {
      sandbox.resetHistory();
    });

    it('should throw BadRequestException if format is invalid', () => {
      const fn = () => formatter.stringify(
        { doc: { doc1: 'json' } }, 
        { format: 'wrong' as Format },
      );
      expect(fn).to.throw(BadRequestException);
    });

    it('should stringify using delineated formatter if Format.Delineated is specified', () => {
      formatter.stringify({} , { format: Format.Delineated} );
      expect(mockDelineatedFormatter.stringify).to.have.been.calledOnce;
    });

    it('should stringify using json formatter if Format.Json is specified', () => {
      formatter.stringify({} , { format: Format.Json} );
      expect(mockJsonFormatter.stringify).to.have.been.calledOnce;
    });

    it('should stringify using xml formatter if Format.Xml is specified', () => {
      formatter.stringify({} , { format: Format.Xml} );
      expect(mockXmlFormatter.stringify).to.have.been.calledOnce;
    });
  });
});
