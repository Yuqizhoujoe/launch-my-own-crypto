import { NetworkConfig } from '../types';

// JOJO Token Constants
export const TOKEN_NAME = 'JOJO Token';
export const TOKEN_SYMBOL = 'JOJO';
export const TOKEN_DECIMALS = 18;
export const INITIAL_SUPPLY = BigInt('120000000000000000000000000'); // 120M tokens
export const ANNUAL_INFLATION_RATE = 320; // 3.2% (stored as basis points)

// Network configurations
export const SUPPORTED_NETWORKS: Record<number, NetworkConfig> = {
  // Arbitrum One
  42161: {
    chainId: 42161,
    name: 'Arbitrum One',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    blockExplorer: 'https://arbiscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  // Arbitrum Sepolia (Testnet)
  421614: {
    chainId: 421614,
    name: 'Arbitrum Sepolia',
    rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
    blockExplorer: 'https://sepolia.arbiscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  // Local development
  31337: {
    chainId: 31337,
    name: 'Hardhat Network',
    rpcUrl: 'http://127.0.0.1:8545',
    blockExplorer: '',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};

// Governance constants
export const GOVERNANCE_CONSTANTS = {
  VOTING_DELAY: 2 * 24 * 60 * 60, // 2 days in seconds
  VOTING_PERIOD: 7 * 24 * 60 * 60, // 7 days in seconds
  PROPOSAL_THRESHOLD: BigInt('1000000000000000000000000'), // 1M tokens
  QUORUM_PERCENTAGE: {
    PARAMETER_CHANGE: 10, // 10%
    TREASURY: 15, // 15%
    UPGRADE: 20, // 20%
    GENERAL: 5, // 5%
  },
  TIMELOCK_DELAY: 2 * 24 * 60 * 60, // 2 days in seconds
} as const;

// Staking constants
export const STAKING_CONSTANTS = {
  LOCK_PERIODS: [
    { days: 30, multiplier: 100 }, // 1x
    { days: 90, multiplier: 150 }, // 1.5x
    { days: 180, multiplier: 200 }, // 2x
    { days: 365, multiplier: 300 }, // 3x
  ],
  BASE_APY: 800, // 8% (basis points)
  EARLY_WITHDRAWAL_PENALTY: 1000, // 10% (basis points)
} as const;

// Distribution constants
export const DISTRIBUTION = {
  EARLY_USERS_STAKERS: 50, // 50%
  LIQUIDITY_INCENTIVES: 25, // 25%
  TREASURY_DAO: 15, // 15%
  ECOSYSTEM_GRANTS: 10, // 10%
} as const;

// Contract addresses (to be updated after deployment)
export const CONTRACT_ADDRESSES: Record<number, Record<string, string>> = {
  // Arbitrum One
  42161: {
    JOJO_TOKEN: '',
    STAKING: '',
    GOVERNANCE: '',
    TIMELOCK: '',
    TREASURY: '',
  },
  // Arbitrum Sepolia
  421614: {
    JOJO_TOKEN: '',
    STAKING: '',
    GOVERNANCE: '',
    TIMELOCK: '',
    TREASURY: '',
  },
  // Local
  31337: {
    JOJO_TOKEN: '',
    STAKING: '',
    GOVERNANCE: '',
    TIMELOCK: '',
    TREASURY: '',
  },
};

// API endpoints
export const API_ENDPOINTS = {
  PRODUCTION: 'https://api.jojotoken.com',
  STAGING: 'https://staging-api.jojotoken.com',
  DEVELOPMENT: 'http://localhost:3001',
} as const;

// The Graph endpoints
export const SUBGRAPH_ENDPOINTS = {
  ARBITRUM_ONE: '',
  ARBITRUM_SEPOLIA: '',
} as const;

// Common addresses
export const COMMON_ADDRESSES = {
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  DEAD_ADDRESS: '0x000000000000000000000000000000000000dEaD',
} as const;

// Time constants
export const TIME_CONSTANTS = {
  SECOND: 1,
  MINUTE: 60,
  HOUR: 60 * 60,
  DAY: 24 * 60 * 60,
  WEEK: 7 * 24 * 60 * 60,
  MONTH: 30 * 24 * 60 * 60,
  YEAR: 365 * 24 * 60 * 60,
} as const;

// Math constants
export const MATH_CONSTANTS = {
  BASIS_POINTS: 10000,
  PERCENTAGE: 100,
  WEI_PER_ETHER: BigInt('1000000000000000000'),
} as const;