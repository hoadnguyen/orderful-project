import { expect } from 'chai';
import { Request, Response } from 'express';
import { Format } from '../../enum/format';
import { BadRequestException } from '../../utils/exceptions';
import { documentBodyParser } from './document-body.parser';
import * as sinon from 'sinon';

const standardReq = {
  header: (name: string): string => {
    if (name === 'Content-Type') {
      return 'text/plain';
    }
    if (name === 'Accept') {
      return 'application/json';
    }
    return '';
  },
  query: {
    itemSeparator: '*',
    lineSeparator: '~',
  },
  body: 'ProductID* 4* 8* 15* 16*23~AddressID* 42* 108*3* 14 ~ContactID* 59* 26~',
};

describe('DocumentBodyParser', () => {
  it('should throw BadRequestException if ContentType is undefined', () => {
    const request = {
      ...standardReq,
      header: (name: string): string => {
        if (name === 'Accept') {
          return 'application/json';
        }
        return '';
      },
    };

    const fn = () => documentBodyParser.parse(
      request as unknown as Request,
      {} as Response,
      () => undefined,
    );

    expect(fn).to.throw(BadRequestException);
  });

  it('should throw BadRequestException if Accept is undefined', () => {
    const request = {
      ...standardReq,
      header: (name: string): string => {
        if (name === 'Content-Type') {
          return 'text/plain';
        }
        return '';
      },
    };

    const fn = () => documentBodyParser.parse(
      request as unknown as Request,
      {} as Response,
      () => undefined,
    );

    expect(fn).to.throw(BadRequestException);
  });

  it('should create a request.body with valid fields', () => {
    const next = sinon.stub();
    const req = {...standardReq};

    documentBodyParser.parse(
      req as unknown as Request,
      {} as Response,
      next,
    );
    expect(next).to.have.been.calledOnce;

    expect(req.body).to.eql({
      from: {
        format: Format.Delineated,
        itemSeparator: '*',
        lineSeparator: '~',
      },
      to: {
        format: Format.Json,
        itemSeparator: '*',
        lineSeparator: '~',
      },
      document: 'ProductID* 4* 8* 15* 16*23~AddressID* 42* 108*3* 14 ~ContactID* 59* 26~',
    });
  });
});
