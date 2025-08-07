# 🪙 JOJO Token - Community-Driven Cryptocurrency on Arbitrum

![JOJO Token](https://img.shields.io/badge/Token-JOJO-blue)
![Network](https://img.shields.io/badge/Network-Arbitrum-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A community-driven cryptocurrency built on Arbitrum with staking, governance, and treasury functionality. 100% community-owned with fair distribution and sustainable tokenomics.

## 🏗️ Project Architecture

This is a **Turborepo monorepo** containing all components of the JOJO Token ecosystem:

```
jojo-token/
├── packages/
│   ├── contracts/      # Smart contracts (Hardhat)
│   ├── web/           # Next.js frontend
│   ├── api/           # Node.js backend
│   ├── shared/        # Shared types & utilities
│   └── subgraph/      # The Graph indexer
├── docs/              # Documentation
├── tools/             # Development tools
└── apps/              # Additional applications
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/jojo-token.git
   cd jojo-token
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment files
   cp packages/contracts/.env.example packages/contracts/.env
   cp packages/web/.env.example packages/web/.env.local
   cp packages/api/.env.example packages/api/.env
   ```

4. **Build all packages**
   ```bash
   pnpm build
   ```

## 🛠️ Development Commands

### Global Commands (run from root)

```bash
# Development (all packages)
pnpm dev

# Build all packages
pnpm build

# Test all packages
pnpm test

# Lint all packages
pnpm lint

# Type check all packages
pnpm type-check

# Format all code
pnpm format

# Clean all build artifacts
pnpm clean
```

### Package-Specific Commands

#### Smart Contracts (`packages/contracts`)
```bash
cd packages/contracts

# Compile contracts
pnpm compile

# Run tests
pnpm test

# Deploy to testnet
pnpm deploy:testnet

# Deploy to mainnet
pnpm deploy:mainnet
```

#### Web Frontend (`packages/web`)
```bash
cd packages/web

# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

#### Backend API (`packages/api`)
```bash
cd packages/api

# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

#### The Graph Subgraph (`packages/subgraph`)
```bash
cd packages/subgraph

# Generate code
pnpm codegen

# Build subgraph
pnpm build

# Deploy to testnet
pnpm deploy:arbitrum-sepolia
```

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Web3**: Wagmi v2 + Viem
- **State Management**: Zustand + React Query
- **Wallet**: RainbowKit + WalletConnect v2

### Backend
- **Runtime**: Node.js + Express
- **Database**: PostgreSQL + Prisma
- **Cache**: Redis
- **Authentication**: JWT + Web3 signatures
- **Queue**: Bull/BullMQ

### Blockchain
- **Network**: Arbitrum One (L2)
- **Contracts**: Solidity + OpenZeppelin
- **Framework**: Hardhat
- **Indexing**: The Graph Protocol

## 📊 Token Specifications

- **Name**: JOJO Token
- **Symbol**: JOJO
- **Standard**: ERC-20
- **Initial Supply**: 120,000,000 JOJO
- **Annual Inflation**: 3.2% (governance adjustable)
- **Network**: Arbitrum One

### Distribution

- **50%** - Early users & stakers (60M tokens)
- **25%** - Liquidity incentives (30M tokens)  
- **15%** - DAO treasury (18M tokens)
- **10%** - Ecosystem grants (12M tokens)

## 🏛️ Governance

- **Voting Power**: 1 JOJO = 1 Vote
- **Proposal Threshold**: 1M JOJO tokens
- **Voting Period**: 7 days
- **Execution Delay**: 2 days (timelock)
- **Quorum Requirements**: 5-20% (varies by proposal type)

## 🥩 Staking

Multiple lock periods with different rewards:

- **30 days**: 1.0x multiplier (8% APY)
- **90 days**: 1.5x multiplier (12% APY)  
- **180 days**: 2.0x multiplier (16% APY)
- **365 days**: 3.0x multiplier (24% APY)

## 📁 Package Details

### `packages/shared`
Common types, utilities, and constants used across all packages.

**Key exports:**
- Type definitions (Token, User, Proposal, etc.)
- Validation schemas (Zod)
- Utility functions
- Constants and configuration

### `packages/contracts` 
Smart contracts and deployment scripts.

**Key contracts:**
- `JOJOToken.sol` - ERC-20 token with governance features
- `Staking.sol` - Staking rewards and lock periods
- `Governance.sol` - On-chain governance system
- `Treasury.sol` - Community fund management

### `packages/web`
Next.js frontend application for users.

**Key features:**
- Wallet connection and account management
- Token staking and rewards
- Governance proposals and voting
- Portfolio dashboard
- Mobile-responsive design

### `packages/api`
Backend REST API for off-chain data and services.

**Key endpoints:**
- `/api/auth` - Authentication and user management
- `/api/governance` - Proposal data and analytics
- `/api/staking` - Staking statistics
- `/api/analytics` - Protocol metrics

### `packages/subgraph`
The Graph Protocol subgraph for indexing blockchain data.

**Indexed entities:**
- Token transfers and balances
- Staking events and rewards
- Governance proposals and votes
- Treasury transactions

## 🔄 Development Workflow

1. **Feature Development**
   - Create feature branch from `main`
   - Implement changes in relevant packages
   - Add tests and documentation
   - Run `pnpm lint` and `pnpm type-check`

2. **Testing**
   - Unit tests: `pnpm test`
   - Integration tests: `pnpm test:integration`
   - E2E tests: `pnpm test:e2e`

3. **Deployment**
   - Testnet deployment: `pnpm deploy:testnet`
   - Frontend deployment: Automatic via Vercel
   - Backend deployment: Docker + AWS/GCP

## 🔒 Security

- **Smart Contract Audits**: Multiple security audits planned
- **Static Analysis**: Slither, MythX integration
- **Access Control**: Multi-signature requirements
- **Emergency Procedures**: Pause mechanisms and circuit breakers

## 📖 Documentation

- **Whitepaper**: [`whitepaper.md`](./whitepaper.md)
- **Tokenomics**: [`tokenomics.md`](./tokenomics.md) 
- **Development Plan**: [`crypto-plan.md`](./crypto-plan.md)
- **Governance Research**: [`governance-research.md`](./governance-research.md)
- **DAO Knowledge Base**: [`dao-governance-knowledge-base.md`](./dao-governance-knowledge-base.md)

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines and join our Discord for coordination.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Community Channels
- **Discord**: [Join our server](https://discord.gg/jojo-token)
- **Forum**: [Governance discussions](https://forum.jojotoken.com)
- **Twitter**: [@JOJOToken](https://twitter.com/JOJOToken)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🛣️ Roadmap

### Phase 1: Foundation (Current)
- ✅ Monorepo setup and architecture
- ✅ Documentation and tokenomics
- ⏳ Smart contract development

### Phase 2: Development (Weeks 3-6)
- Smart contract implementation
- Frontend development
- Backend API development
- Testing and audits

### Phase 3: Launch (Weeks 7-10)
- Mainnet deployment
- Token distribution
- Community governance activation
- DEX liquidity creation

---

**Built with ❤️ by the JOJO Token community**