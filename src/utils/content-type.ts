import { Format } from '../enum/format';

export const contentTypeFromFormat = (format: Format): string => {
  switch (format) {
  case Format.Delineated:
    return 'text/plain';
  case Format.Json:
    return 'application/json';
  case Format.Xml:
    return 'application/xml';
  }
};

export const formatFromHeaderType = (contentType: string): Format | undefined => {
  switch (contentType) {
  case 'text/plain':
    return Format.Delineated;
  case 'application/json':
    return Format.Json;
  case 'application/xml':
    return Format.Xml;
  default:
    return undefined;
  }
};
