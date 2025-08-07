# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **JOJO Token** project - a community-driven cryptocurrency being developed for the Arbitrum ecosystem. The project is now structured as a **Turborepo monorepo** with full development infrastructure for smart contracts, frontend, backend, and indexing services.

## Project Structure

### Monorepo Architecture

This is a Turborepo monorepo with the following packages:

```
jojo-token/
├── packages/
│   ├── contracts/      # Smart contracts (Hardhat + Solidity)
│   ├── web/           # Next.js 14+ frontend with Wagmi/Viem
│   ├── api/           # Node.js + Express backend API
│   ├── shared/        # Shared TypeScript types & utilities
│   └── subgraph/      # The Graph Protocol subgraph
├── docs/              # Documentation
├── tools/             # Development tools and scripts
└── apps/              # Additional applications (future)
```

### Documentation Files

- `README.md` - Main project documentation and setup guide
- `whitepaper.md` - Complete technical and economic specification
- `tokenomics.md` - Detailed token economics and distribution model
- `crypto-plan.md` - Phase-by-phase development roadmap
- `governance-research.md` - Governance mechanism research
- `dao-governance-knowledge-base.md` - DAO implementation guidelines

### Development Status

- **Current Phase**: Phase 1 completed - Foundation and monorepo setup ✅
- **Next Phase**: Smart contract development (Phase 2)
- **Target Platform**: Arbitrum One (Layer 2)
- **Token Standard**: ERC-20

## Technical Architecture (Planned)

### Smart Contract Stack

The project will implement these core contracts:

- **JOJO Token Contract**: Custom ERC-20 with inflation mechanics
- **Staking Contract**: Delegated proof-of-stake style rewards
- **Governance Contract**: Token-weighted voting system
- **Treasury Contract**: Community-controlled fund management

### Development Stack

- **Language**: Solidity
- **Framework**: Hardhat or Foundry (to be determined)
- **Network**: Arbitrum One
- **Testing**: Unit + integration tests required
- **Auditing**: Slither, MythX, and formal audit planned

## Key Token Specifications

- **Initial Supply**: 120,000,000 JOJO
- **Annual Inflation**: 3.2% (governance adjustable)
- **Distribution**: 100% community-owned (no team/VC allocation)
- **Utility**: Payments, DeFi collateral, staking rewards, governance

## Development Commands

### Global Commands (run from root)

```bash
# Install all dependencies
pnpm install

# Development mode (all packages)
pnpm dev

# Build all packages
pnpm build

# Run all tests
pnpm test

# Type check all packages
pnpm type-check

# Lint all packages
pnpm lint

# Format all code
pnpm format

# Clean all build artifacts
pnpm clean
```

### Package-Specific Commands

#### Smart Contracts (`packages/contracts`)
```bash
# Compile contracts
cd packages/contracts && pnpm compile

# Run contract tests
cd packages/contracts && pnpm test

# Deploy to Arbitrum Sepolia (testnet)
cd packages/contracts && pnpm deploy:testnet

# Deploy to Arbitrum One (mainnet)
cd packages/contracts && pnpm deploy:mainnet

# Verify contracts on Arbiscan
cd packages/contracts && pnpm verify:mainnet
```

#### Frontend (`packages/web`)
```bash
# Start development server
cd packages/web && pnpm dev

# Build for production
cd packages/web && pnpm build

# Start production server
cd packages/web && pnpm start
```

#### Backend API (`packages/api`)
```bash
# Start development server with hot reload
cd packages/api && pnpm dev

# Build for production
cd packages/api && pnpm build

# Start production server
cd packages/api && pnpm start
```

#### Subgraph (`packages/subgraph`)
```bash
# Generate types from GraphQL schema
cd packages/subgraph && pnpm codegen

# Build subgraph
cd packages/subgraph && pnpm build

# Deploy to The Graph Studio
cd packages/subgraph && pnpm deploy:arbitrum
```

## Development Guidelines

### Smart Contract Development

- Use OpenZeppelin libraries for security
- Implement comprehensive testing before deployment
- Follow Arbitrum-specific deployment patterns
- Include emergency mechanisms and circuit breakers
- Implement multi-signature controls for critical functions

### Security Requirements

- All contracts must be audited before mainnet deployment
- Use time-locked governance for major changes
- Implement formal verification where possible
- Include emergency pause mechanisms

### Governance Implementation

- Token-weighted voting (1 JOJO = 1 Vote)
- Minimum quorum requirements (5-15% depending on proposal type)
- Time delays for execution (2-day minimum for major changes)
- Progressive decentralization approach

## Project Phases

### Phase 1: Foundation (Completed ✅)

- ✅ Whitepaper completion
- ✅ Tokenomics design  
- ✅ Governance model design
- ✅ Legal compliance research
- ✅ Monorepo architecture setup
- ✅ Development tooling and CI/CD
- ✅ TypeScript configuration across packages
- ✅ Package structure and dependencies

### Phase 2: Development (Weeks 3-6)

- Smart contract implementation
- Comprehensive testing suite
- Security audits
- Testnet deployment

### Phase 3: Launch (Weeks 7-10)

- Mainnet deployment
- Initial distribution (airdrops, staking)
- DEX liquidity creation
- Community governance activation

## Distribution Strategy

### Fair Launch Principles

- **0%** team allocation
- **0%** VC allocation
- **100%** community distribution through:
  - 50% early users & stakers
  - 25% liquidity incentives
  - 15% treasury/DAO
  - 10% ecosystem grants

## Important Notes

### Regulatory Considerations

- Token designed as utility, not security
- Community ownership from genesis
- Decentralized governance structure
- Ongoing legal compliance monitoring

### Risk Management

- Controlled inflation with governance oversight
- Multiple security audits planned
- Emergency mechanisms in contracts
- Treasury reserves for stability

This project prioritizes community ownership, fair distribution, and sustainable tokenomics while building on the robust Arbitrum infrastructure.
