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
