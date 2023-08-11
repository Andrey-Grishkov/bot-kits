export interface TableRow {
  linkClicks: number;
  registrations: number;
  paymentStatus: boolean;
  sum: number;
  commission: number;
  paidOut: number;
  withdrawal: number;
}

export interface PayoutRow {
  requestDate: string;
  paymentDate: string;
  act: string;
  status: string;
  payoutSum: number;
}
