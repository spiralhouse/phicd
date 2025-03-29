# PhiCD

A powerful continuous delivery tracking system that measures key performance indicators across your development pipeline, providing actionable insights to help teams deliver software faster and more reliably.

## Overview

PhiCD is part of SpiralHouse's suite of open-source tools dedicated to enhancing the developer experience. It helps engineering teams measure, understand, and improve their software delivery performance by tracking DORA metrics (Deployment Frequency, Lead Time for Changes, Mean Time to Restore, and Change Failure Rate) and identifying specific areas for improvement.

## Features

- Comprehensive DORA metrics tracking and visualization
- Multi-environment deployment pipeline monitoring
- Deployment strategy analysis (blue/green, canary)
- Rollback tracking and impact assessment
- CI/CD pipeline integration
- Configuration management
- Robust security controls
- Comprehensive monitoring and logging

## Documentation

Detailed documentation can be found in the [docs](./docs) directory:

- [System Overview](./docs/architecture/system-overview.md)
- [Deployment Workflow](./docs/technical/deployment-workflow.md)
- [Security Model](./docs/technical/security-model.md)
- [Integration Guide](./docs/guides/integration-guide.md)
- [Operations Guide](./docs/guides/operations-guide.md)

## License

This software is released under the Apache License 2.0 with Commons Clause.

### What You Can Do
- ✅ Use the software freely in your business
- ✅ Deploy internally in your organization
- ✅ View and modify the source code
- ✅ Share your modifications
- ✅ Use our software to run your business operations

### What You Cannot Do
- ❌ Sell the software
- ❌ Offer the software as a commercial managed service
- ❌ Resell hosted or cloud versions
- ❌ Commercially distribute the software

## Development Status

This project is currently in the planning phase. Implementation will begin once the architectural design and documentation are complete.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

### Commit Guidelines

This project follows [Conventional Commits](https://www.conventionalcommits.org/) to automate versioning and changelog generation. All commits must follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Routine tasks, maintenance, etc.

Breaking changes must be indicated with `!` or `BREAKING CHANGE:` in the footer.

## Development Setup

### Prerequisites
- Node.js v18 or later
- npm v7 or later

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   This will automatically set up Git hooks for commit message validation.

### Git Hooks
This project uses Git hooks to ensure code quality and consistency:

- **commit-msg**: Validates commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
  - Subject line must be 72 characters or less
  - Body lines must be 100 characters or less
  - Must use valid commit types (feat, fix, docs, style, refactor, test, chore)

To bypass hooks in exceptional cases (not recommended), use:
```bash
git commit --no-verify -m "your message"
```

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
feat(api): add endpoint for deployment status

Add new REST endpoint for querying deployment status across
multiple clusters. Includes support for filtering and sorting.

Closes #123
```

For more details, see our [contribution guidelines](docs/CONTRIBUTING.md). 