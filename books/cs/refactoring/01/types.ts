export interface IPlays {
  [key: string]: { name: string; type: string };
}

interface IPerformance {
  playID: string;
  audience: number;
}

export interface IInvoices {
  customer: string;
  performances: IPerformance[];
}
