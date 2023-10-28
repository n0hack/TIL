export type AnyObject = {
  [key: string]: any;
};

export type ValidateRule = {
  rule: RegExp;
  match: boolean;
  message: string;
};
