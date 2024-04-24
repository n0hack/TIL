// https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991
type ErrorName = 'GET_PROJECT_ERROR' | 'CREATE_PROJECT_ERROR' | 'PROJECT_LIMIT_REACHED';

export class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: any;

  constructor({ name, message, cause }: { name: T; message: string; cause?: any }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

export class TeamError extends ErrorBase<ErrorName> {}

throw new TeamError({
  name: 'CREATE_PROJECT_ERROR',
  message: 'API error occured while creating project',
});
