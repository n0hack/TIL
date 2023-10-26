import { AnyObject, DaumAddress } from './types';

declare global {
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string;
    };
    daum: {
      Postcode: {
        new (options: { oncomplete: (data: DaumAddress) => void }): any;
      };
    };
  }
}

export {};
