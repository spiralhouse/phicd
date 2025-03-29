# AI Pair Programming Guide

This document serves as a quick reference for AI assistants (particularly Claude) working on the phicd project. It provides context and preferences that would otherwise need to be re-explained after session resets.

## Project Context

phicd is a deployment system project that provides complete visibility and control over the software delivery lifecycle at scale. It empowers developers with real-time insight into their changes, enables operators to confidently manage validated deployments, and ensures systems can be safely rolled out and rolled back.

## Development Environment

### Tools and Configuration
- Operating System: darwin 24.3.0
- Shell: /bin/zsh
- GitHub CLI: Installed and authenticated
- Workspace: /Users/$USER/Projects/phicd

### Related Repositories
- phicd: Current repository

## Development Preferences

### Git Workflow
1. Create feature branches from main
2. Use conventional commits
3. Create focused, single-purpose PRs
4. Include comprehensive PR descriptions

### PR Creation Guidelines
- Use `gh pr create` for creating PRs
- For PR descriptions with line breaks, use one of these approaches:
  ```bash
  # Approach 1: Using echo -e (preferred)
  echo -e "Title\n\nDescription with proper line breaks\n- Point 1\n- Point 2" | gh pr create --title "type: descriptive title" -F -

  # Approach 2: Using temporary files
  cat > pr-description.txt << EOL
  Your PR description here
  EOL
  cat pr-description.txt | gh pr create --title "type: descriptive title" -F -
  rm pr-description.txt  # cleanup needed
  ```
- Keep PR descriptions focused and well-structured
- Use blank lines between sections for better readability
- Use proper Markdown formatting for lists and sections

### Code Organization
- ADRs in docs/adr/
- Documentation in docs/
- Source code structure (coming soon)

### Documentation Standards
- Use markdown for all documentation
- Include links to related documents
- Keep documentation close to code
- Update docs alongside code changes

## AI Assistant Preferences

### Communication Style
- Professional but conversational
- Explain actions before executing them
- Provide options for next steps
- Ask for clarification when needed

### Tool Usage
- Prefer using available tools over asking for manual steps
- Explain tool usage before execution
- Handle errors gracefully
- Clean up temporary files

### Code Changes
- Make focused, purposeful changes
- Explain changes before making them
- Follow project conventions
- Consider impact on existing code

## Common Tasks

### Creating a New Feature Branch
```bash
git checkout -b feature/descriptive-name
```

### Creating a PR
```bash
# Create PR with echo -e (preferred method)
echo -e "Summary of changes\n\nDetailed description of changes:\n- Change 1\n- Change 2\n\nAdditional context or notes" | gh pr create --title "type: descriptive title" -F -
```

### Commit Messages
```bash
git commit -m "type(scope): descriptive message"
```

## Project Status

Current phase:
- Initial architecture design
- Core documentation setup
- Multi-cluster orchestration design
- Progressive delivery implementation planning

Next steps:
- Real-time deployment visibility implementation
- Automated quality gates integration
- Self-service pipeline creation
- Rollback mechanism implementation

## References

- [Project README](README.md)
- [Architecture Decisions](docs/decisions/)
- [Technical Documentation](docs/technical/)
- [AureaCore Repository](https://github.com/spiralhouse/aureacore)

## Maintenance

This document should be updated when:
- Development preferences change
- New common tasks are identified
- Project status changes significantly
- New AI-relevant context is needed 