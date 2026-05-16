export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface Stamp {
  id: number;
  runeName: string;
  recipient: string;
  mintedAt: number;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
