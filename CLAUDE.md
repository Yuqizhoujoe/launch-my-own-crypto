# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **JOJO Token** project - a community-driven cryptocurrency being developed for the Arbitrum ecosystem. The project is currently in the documentation and planning phase, with plans to implement smart contracts for an ERC-20 token with staking, governance, and treasury functionality.

## Project Structure

### Documentation Files

- `whitepaper.md` - Complete technical and economic specification of JOJO Token
- `tokenomics.md` - Detailed token economics and distribution model
- `crypto-plan.md` - Phase-by-phase development roadmap
- `governance-research.md` - Governance mechanism research
- `dao-governance-knowledge-base.md` - DAO implementation guidelines

### Development Status

- **Current Phase**: Documentation and planning (Phase 1)
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

### Current Commands (Basic Node.js setup)

```bash
# Install dependencies (minimal setup currently)
npm install

# Test command (placeholder - will fail until tests implemented)
npm test
```

### Planned Commands (Future Implementation)

```bash
# Compile smart contracts
npm run compile

# Run unit tests
npm run test

# Deploy to testnet
npm run deploy:testnet

# Deploy to mainnet
npm run deploy:mainnet

# Verify contracts
npm run verify

# Run security analysis
npm run audit
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

### Phase 1: Documentation (Current - Weeks 1-2)

- ✅ Whitepaper completion
- ✅ Tokenomics design
- ✅ Governance model design
- ✅ Legal compliance research

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
