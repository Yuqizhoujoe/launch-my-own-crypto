import { z } from 'zod';

// Token related types
export interface Token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
  chainId: number;
}

// User related types
export interface User {
  address: string;
  balance: bigint;
  stakedBalance: bigint;
  votingPower: bigint;
  delegatedTo?: string;
}

// Staking related types
export interface StakeInfo {
  amount: bigint;
  lockPeriod: number;
  startTime: number;
  endTime: number;
  rewards: bigint;
  status: 'active' | 'unlocked' | 'claimed';
}

// Governance related types
export interface Proposal {
  id: string;
  proposer: string;
  title: string;
  description: string;
  category: ProposalCategory;
  status: ProposalStatus;
  votesFor: bigint;
  votesAgainst: bigint;
  votesAbstain: bigint;
  quorumReached: boolean;
  executed: boolean;
  createdAt: number;
  votingStartTime: number;
  votingEndTime: number;
  executionTime?: number;
}

export enum ProposalCategory {
  PARAMETER_CHANGE = 'parameter_change',
  TREASURY = 'treasury',
  UPGRADE = 'upgrade',
  GENERAL = 'general',
}

export enum ProposalStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  SUCCEEDED = 'succeeded',
  DEFEATED = 'defeated',
  QUEUED = 'queued',
  EXECUTED = 'executed',
  CANCELED = 'canceled',
}

export interface Vote {
  proposalId: string;
  voter: string;
  support: VoteType;
  weight: bigint;
  reason?: string;
  timestamp: number;
}

export enum VoteType {
  AGAINST = 0,
  FOR = 1,
  ABSTAIN = 2,
}

// Treasury related types
export interface TreasuryTransaction {
  id: string;
  to: string;
  value: bigint;
  data: string;
  description: string;
  executed: boolean;
  proposalId?: string;
  executedAt?: number;
}

// DeFi integration types
export interface LiquidityPool {
  address: string;
  token0: Token;
  token1: Token;
  reserve0: bigint;
  reserve1: bigint;
  totalSupply: bigint;
  fee: number;
}

// Network related types
export interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: number;
}

// Zod schemas for validation
export const AddressSchema = z.string().regex(/^0x[a-fA-F0-9]{40}$/);
export const BigIntSchema = z.string().transform((val) => BigInt(val));

export const TokenSchema = z.object({
  address: AddressSchema,
  name: z.string(),
  symbol: z.string(),
  decimals: z.number().int().min(0).max(18),
  totalSupply: BigIntSchema,
  chainId: z.number().int(),
});

export const UserSchema = z.object({
  address: AddressSchema,
  balance: BigIntSchema,
  stakedBalance: BigIntSchema,
  votingPower: BigIntSchema,
  delegatedTo: AddressSchema.optional(),
});

export const ProposalSchema = z.object({
  id: z.string(),
  proposer: AddressSchema,
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(5000),
  category: z.nativeEnum(ProposalCategory),
  status: z.nativeEnum(ProposalStatus),
  votesFor: BigIntSchema,
  votesAgainst: BigIntSchema,
  votesAbstain: BigIntSchema,
  quorumReached: z.boolean(),
  executed: z.boolean(),
  createdAt: z.number().int(),
  votingStartTime: z.number().int(),
  votingEndTime: z.number().int(),
  executionTime: z.number().int().optional(),
});

// Contract event types
export interface TransferEvent {
  from: string;
  to: string;
  value: bigint;
  blockNumber: number;
  transactionHash: string;
  logIndex: number;
}

export interface StakeEvent {
  user: string;
  amount: bigint;
  lockPeriod: number;
  blockNumber: number;
  transactionHash: string;
}

export interface VoteEvent {
  proposalId: string;
  voter: string;
  support: VoteType;
  weight: bigint;
  blockNumber: number;
  transactionHash: string;
}