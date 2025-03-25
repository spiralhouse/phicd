# Contributing to the Deployment System

Thank you for your interest in contributing to our deployment system! This document provides guidelines and instructions for contributing.

## Pull Request Process

1. All changes must be made through pull requests - no direct commits to the main branch
2. Pull requests require at least one reviewer approval before merging
3. Branch names should follow the format: `<type>/<description>` (e.g., `feat/add-canary-deployments`)
4. Ensure your code passes all automated tests
5. Update documentation as necessary

## Conventional Commits

This project strictly follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. All commit messages must adhere to this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.; no code change)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Routine tasks, maintenance, etc.
- `revert`: Reverting a previous commit

### Scopes

Scopes are optional but encouraged. They provide additional contextual information about the change. Example scopes for this project include:

- `api`: Changes to the API
- `agent`: Changes to deployment agents
- `orchestrator`: Changes to the orchestrator
- `config`: Changes to configuration handling
- `security`: Security-related changes
- `docs`: Documentation changes

### Examples

```
feat(api): add new endpoint for deployment status

Added a new REST endpoint that allows clients to query the status of a deployment.
```

```
fix(agent): resolve connection timeout issue

Increased the connection timeout to prevent agents from disconnecting prematurely.

Resolves #123
```

```
chore: update dependencies to latest versions
```

```
feat!: change authentication flow

BREAKING CHANGE: The authentication workflow has been completely redesigned.
Clients need to update their integration to use the new OAuth flow.
```

## Semantic Versioning

Commit types automatically determine how version numbers are incremented:

- `fix` type commits trigger a PATCH version increment (1.0.x)
- `feat` type commits trigger a MINOR version increment (1.x.0)
- Commits with `BREAKING CHANGE:` in the footer or with `!` after the type/scope trigger a MAJOR version increment (x.0.0)

## Development Workflow

1. Create a new branch from `main`
2. Make your changes with conventional commits
3. Push your branch and create a pull request
4. Address any feedback from reviewers
5. Once approved, your PR will be merged

## Code Style and Quality

- Follow the established code style in the project
- Write unit tests for new features and bug fixes
- Ensure your code passes linting and tests before submitting a PR 