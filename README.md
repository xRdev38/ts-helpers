# ts-helpers Monorepo

> Monorepo root for `ts-helpers` suite of TypeScript helper libraries.

This repository uses Lerna and pnpm workspaces to manage multiple publishable and buildable packages.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Workspaces](#workspaces)
- [Available Scripts](#available-scripts)
- [Packages Structure](#packages-structure)
- [Publishing & Registry](#publishing--registry)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

- **Node.js** v18.x or higher
- **pnpm** v8 or higher
- **Git** for version control

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd ts-helpers-monorepo
pnpm install --frozen-lockfile
```

After install, Husky hooks are set up automatically (`prepare` & `postinstall` scripts).

---

## Workspaces

This monorepo uses pnpm workspaces defined under:

```json
"workspaces": [
  "packages/*"
]
```

Each package resides in `packages/<scope>/<pkg>` and is managed by Lerna.

---

## Available Scripts

All commands are run from the root using `pnpm run <script>`.

| Script                 | Description                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------|
| `pnpm run lint`        | Run ESLint on all packages                                                                   |
| `pnpm run test`        | Run unit tests in all packages                                                               |
| `pnpm run test:coverage` | Run tests with coverage reports                                                            |
| `pnpm run build`       | Build all packages using Lerna                                                               |
| `pnpm run commit`      | Launch Commitizen for conventional commits                                                   |
| `pnpm run version`     | Generate changelog and commit it (`CHANGELOG.md`)                                            |
| `pnpm run version:prerelease` | Bump pre-release version, e.g. `beta` tag                                              |
| `pnpm run version:ci`  | Bump version in CI mode with conventional commits                                            |
| `pnpm run bootstrap:ci` | Install dependencies in CI (`pnpm install --immutable`)                                     |
| `pnpm run ci`          | Run `lint`, `test`, and `build` in parallel                                                   |
| `pnpm run publish:ci`  | Publish all packages from local versions to registry                                         |
| `pnpm run deploy:doc`  | Build docs and deploy to Surge (legacy)                                                      |
| `pnpm run prepare`     | Initialize Husky Git hooks                                                                    |
| `pnpm run postinstall` | Trigger `prepare` after install                                                               |

---

## Packages Structure

```text
packages/
├── @xRdev38/utils         # General utility helpers
├── @xRdev38/api-client    # HTTP client wrapper
├── @xRdev38/guards        # Type guards & validation
├── @xRdev38/types         # Shared TypeScript types & interfaces
└── @xRdev38/di            # Inversify DI container & services
```

Each package is buildable and publishable independently via Lerna.

---

Ensure you have an environment variable `NPM_TOKEN` set in CI for authentication:

```bash
export NPM_TOKEN=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

In GitHub Actions, this token is saved as a secret and used to generate `.npmrc`.

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/awesome`
3. Commit your changes: `pnpm run commit`
4. Push to the branch: `git push origin feature/awesome`
5. Open a Pull Request

---

## License

This project does not specify a license in `package.json`. Please add a `LICENSE` file or update the root `package.json` accordingly.
