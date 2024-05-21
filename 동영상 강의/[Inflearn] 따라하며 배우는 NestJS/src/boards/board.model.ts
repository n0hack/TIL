export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface Board {
  id: number;
  title: string;
  description: string;
  status: BoardStatus;
}
