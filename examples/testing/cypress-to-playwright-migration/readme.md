# Cypress to Playwright Migration Guide

> **© Jetbase** — this repository is owned and maintained by [Jetbase](https://jetbase.io).

A practical example of migrating an end-to-end test suite from Cypress to Playwright with the help of an AI coding agent (GitHub Copilot).

## Overview

This project demonstrates a structured approach to test framework migration, preserving the Page Object Model pattern while adopting Playwright's native APIs and fixture system.

## Playwright Project Structure

```
playwright/
├── app/
│   ├── components/      # Reusable UI components
│   ├── fixtures/        # Global test setup & teardown
│   └── pageobjects/     # Page Object classes
├── constants/           # Static test data (JSON)
├── helpers/             # Utility functions
└── tests/               # Test specs
```

## Migration Workflow

1. Initialize Playwright in the project: `npm init playwright`
2. Design the folder structure (see above)
3. Plan shared infrastructure — fixtures, page manager, base class
4. Use the AI agent prompt: follow instructions in [migrate_tests.prompt.md](.github/prompts/migrate_tests.prompt.md)
5. Migrate test files one by one, verifying output before committing
6. Ensure every migrated file respects the established infrastructure
