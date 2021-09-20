import { Document } from './document';

export interface Formatter {
  parse(str: string, options?: unknown): Document;
  stringify(doc: Document, options?: unknown): string;
}
