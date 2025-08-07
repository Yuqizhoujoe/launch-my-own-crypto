# Contributing to JOJO Token

We welcome contributions from the community! This document provides guidelines for contributing to the JOJO Token project.

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/jojo-token.git
   cd jojo-token
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Code Style

We use automated formatting and linting:

- **ESLint** for TypeScript/JavaScript linting
- **Prettier** for code formatting  
- **Solhint** for Solidity linting
- **Husky** for pre-commit hooks

Run these commands before committing:
```bash
pnpm lint        # Check linting
pnpm format      # Format code
pnpm type-check  # Check types
```

### Testing

All packages should have comprehensive tests:

```bash
pnpm test                    # Run all tests
pnpm --filter @jojo/contracts test    # Contract tests
pnpm --filter @jojo/web test           # Frontend tests
pnpm --filter @jojo/api test           # Backend tests
```

### Package-Specific Guidelines

#### Smart Contracts (`packages/contracts`)

- Use OpenZeppelin libraries when possible
- Follow the [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- Write comprehensive tests with >90% coverage
- Include NatSpec documentation
- Use events for important state changes

#### Frontend (`packages/web`)

- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use shadcn/ui components when possible
- Ensure mobile responsiveness
- Add loading states and error handling

#### Backend (`packages/api`)

- Use TypeScript for all endpoints
- Validate inputs with Zod schemas
- Include proper error handling
- Write integration tests
- Document API endpoints

#### Shared (`packages/shared`)

- Keep types generic and reusable
- Add comprehensive JSDoc comments
- Include validation schemas
- Follow naming conventions

## Pull Request Process

1. **Update documentation** if your changes affect user-facing features
2. **Add tests** for new functionality
3. **Run the full test suite** and ensure all checks pass
4. **Create a changeset** if your changes require a version bump:
   ```bash
   pnpm changeset
   ```
5. **Submit your PR** with a clear description of the changes

### PR Requirements

- [ ] All tests passing
- [ ] Code properly formatted and linted
- [ ] Type checking passes
- [ ] Documentation updated (if needed)
- [ ] Changeset created (if needed)
- [ ] Security considerations addressed

## Code Review Guidelines

### For Reviewers

- Focus on code correctness, security, and maintainability
- Ensure tests adequately cover new functionality
- Check for gas optimization opportunities (contracts)
- Verify error handling and edge cases
- Confirm documentation is clear and accurate

### For Contributors

- Respond promptly to review feedback
- Keep PRs focused and reasonably sized
- Explain complex logic with comments
- Consider backwards compatibility

## Security

### Smart Contract Security

- Never introduce obvious vulnerabilities (reentrancy, overflow, etc.)
- Consider economic incentives and game theory
- Use established patterns and battle-tested libraries
- Get security review for critical changes

### General Security

- Never commit sensitive information (private keys, API secrets)
- Use environment variables for configuration
- Follow secure coding practices
- Report security issues privately

## Governance

Major changes to the protocol should go through the governance process:

1. **Discussion** - Start with community discussion
2. **Proposal** - Create formal governance proposal  
3. **Review** - Technical and economic review
4. **Vote** - Community voting period
5. **Implementation** - Execute approved changes

## Community Guidelines

- Be respectful and constructive
- Help newcomers get started
- Share knowledge and best practices
- Focus on what's best for the community
- Follow our [Code of Conduct](./CODE_OF_CONDUCT.md)

## Getting Help

- **Discord**: [Join our server](https://discord.gg/jojo-token)
- **GitHub Discussions**: Ask questions and share ideas
- **Documentation**: Check the README and docs/ folder

## Recognition

Contributors will be recognized in:
- Release notes for significant contributions
- Community calls and social media
- Special contributor roles in Discord
- Governance voting credits (where applicable)

Thank you for helping make JOJO Token better! 🚀