import { expect } from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import { BadRequestException } from '../../utils/exceptions';
import { formatReqValidator } from './format-req.validator';

const standardBody = {
  'from': {
    'format': 'delineated',
    'lineSeparator': '~',
    'itemSeparator': '*'
  },
  'to': {
    'format': 'json'
  },
  'document': 'ProductID* 4* 8* 15* 16*23~AddressID* 42* 108*3* 14 ~ContactID* 59* 26~'
};

describe('FormatRequestValidator', () => {
  it('should throw BadRequestException if from value is invalid', () => {
    const body = {...standardBody, from: ''};
    const fn = () => formatReqValidator.validate(
      { body } as Request,
      {} as Response,
      () => null,
    );

    expect(fn).to.throw(BadRequestException);
  });

  it('should throw BadRequestException if to value is invalid', () => {
    const body = {...standardBody, to: ''};
    const fn = () => formatReqValidator.validate(
      { body } as Request,
      {} as Response,
      () => null,
    );

    expect(fn).to.throw(BadRequestException);
  });

  it('should throw BadRequestException if itemSeparator and lineSeparator are not specified', () => {
    const body = {...standardBody, from: { format: 'delineated' }};
    const fn = () => formatReqValidator.validate(
      { body } as Request,
      {} as Response,
      () => null,
    );

    expect(fn).to.throw(BadRequestException);
  });

  it('should call next if body is valid', () => {
    const next = sinon.stub();
    const fn = () => formatReqValidator.validate(
      { body: standardBody } as Request,
      {} as Response,
      next,
    );

    expect(fn).to.not.throw(BadRequestException);
    expect(next).to.have.been.called;
  });
});
