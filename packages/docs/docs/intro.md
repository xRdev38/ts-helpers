---
sidebar_position: 1
---

# Front Devkit

Let's discover **Front devkit**.

## Getting Started

Git clone the project Front Devkit

```bash
git clone https://github.com/xRdev38/ts-helpers.git
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installation

Install dependencies for the **lerna mono-repository**.

```bash
cd root_directory
yarn install
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Start to work in an existing project

You can co into the folder of the project or just run scoped commands:

```bash
// Root command from project directory
cd packages/project_1
yarn start // or yarn build
```

or

```bash
// Scoped commands
lerna run --scope=@xrdev_38/project_1 build // or another command like lint or test
```


