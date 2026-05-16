export const STACKS_MAINNET = 'https://api.mainnet.hiro.so';
export const STACKS_TESTNET = 'https://api.testnet.hiro.so';

export const DEFAULT_FEE_USTX = 5_000;
export const MICROSTX_PER_STX = 1_000_000;

export const CLARITY_VERSION = 4;

export const MAX_RUNE_NAME_LENGTH = 64;
export const MAX_STAMP_DESCRIPTION_LENGTH = 256;
export const STAMP_TIER = { common: 1, rare: 2, legendary: 3 } as const;

export const NETWORKS = {
  mainnet: STACKS_MAINNET,
  testnet: STACKS_TESTNET,
} as const;

export type NetworkName = keyof typeof NETWORKS;
