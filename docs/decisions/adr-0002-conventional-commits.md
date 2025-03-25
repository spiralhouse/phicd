# ADR-0002: Use Conventional Commits

## Status
Proposed

## Context
As our deployment system grows, we need a standardized commit message structure to:
- Provide clear commit history that's human and machine-readable
- Automate versioning and changelog generation
- Enforce quality commit messages
- Streamline the release process

Without standardized commit messages, it becomes difficult to track what types of changes are being made and to automate version increments.

## Decision
We will adopt the Conventional Commits specification (https://www.conventionalcommits.org/) for all commit messages in this repository.

Key aspects of this decision:
- All commits must follow the Conventional Commits format:
  ```
  <type>[optional scope]: <description>
  
  [optional body]
  
  [optional footer(s)]
  ```
- All commits must be submitted via pull requests, including this ADR
- A GitHub workflow will be implemented to validate commits against the conventional format
- Semantic versioning will be automatically enforced based on commit types:
  - `fix:` - Patch version (1.0.x)
  - `feat:` - Minor version (1.x.0)
  - Breaking changes (indicated by `!` or `BREAKING CHANGE:` in footer) - Major version (x.0.0)

## Consequences
- Developers must learn and follow the Conventional Commits specification
- Pull requests that don't adhere to the format will be rejected automatically
- Release versioning will become more consistent and automated
- Changelog generation can be automated
- Better visibility into the types of changes being made
- Easier for new team members to understand the impact of historical changes
- Pull requests become mandatory for all changes, enforcing code review

## Compliance
- All developers must follow the Conventional Commits specification
- The GitHub workflow must be kept functional and not bypassed
- Pull requests are required for all changes
- Regular audits should ensure compliance with the commit format 