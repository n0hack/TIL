type PlayID = 'hamlet' | 'as-like' | 'othello';

type PlayName = 'Hamlet' | 'As You Like It' | 'Othello';

type PlayType = 'tragedy' | 'comedy';

export interface IPlays {
  [key: string]: { name: PlayName; type: PlayType };
}

interface IPerformance {
  playID: PlayID;
  audience: number;
}

export interface IInvoices {
  customer: string;
  performances: IPerformance[];
}
