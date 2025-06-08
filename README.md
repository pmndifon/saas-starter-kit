# 🚀 SaaS Starter Kit

A modular monolith SaaS starter kit built with **React**, **Vite**, **TypeScript**, **Supabase**, and **Clerk**.  
Built to scale from idea to production with modern developer experience in mind.

[![CI](https://img.shields.io/github/actions/workflow/status/your-username/saas-starter-kit/ci.yml?branch=main&style=flat-square)](https://github.com/your-username/saas-starter-kit/actions)
[![License](https://img.shields.io/github/license/your-username/saas-starter-kit?style=flat-square)](LICENSE)

---

## ✨ Features

- 🧩 **Modular Architecture** — Domain-driven structure with separation of concerns
- 🛠 **Developer Ready** — Preconfigured ESLint, Prettier, Husky, and lint-staged
- 🧪 **Testing Setup** — Includes Jest, MSW, and Cypress
- 🔐 **Authentication Ready** — Clerk integrated (login, session, JWT)
- 🔗 **API Ready** — Supabase JS + REST integration scaffolded
- 🚢 **Deployment-Ready** — Includes Docker and GitHub Actions CI
- 🌍 **Lovable.dev & Codespaces Compatible** — Works in cloud IDEs

---

## 📦 Stack Overview

| Frontend     | Backend         | Tooling             |
|--------------|-----------------|---------------------|
| React + Vite | Supabase + Clerk| Jest, ESLint, Docker |

---

## 🚀 Getting Started

Use this template:

```bash
npx degit your-username/saas-starter-kit my-saas-app
cd my-saas-app
npm install
npm run dev
```

> Replace `your-username` with your GitHub handle

---

## 📂 Directory Structure

```
src/
├── application/       # Business logic
├── components/        # Reusable components
├── config/            # Environment & runtime configs
├── context/           # Global state providers (e.g. Tenant)
├── domains/           # Domain models/entities
├── hooks/             # Custom hooks
├── infrastructure/    # External service interfaces
├── lib/               # Utilities (e.g. logger)
├── pages/             # Route-based views
├── providers/         # Context providers
├── shared/            # Common types, validators, helpers
│   ├── types/
│   └── validators/
tests/
├── unit/
├── integration/
└── e2e/
```

---

## 🧱 Full Scaffold & Folder Breakdown

```plaintext
project-root/
├── index.html
├── public/
├── src/
│   ├── application/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── providers/
│   ├── domains/
│   ├── config/
│   ├── lib/
│   ├── shared/
│   └── backend/
├── mocks/
├── tests/
├── .github/
├── .storybook/
├── .vscode/
├── .env / .env.test
├── Dockerfile / docker-compose.yml
├── Various config files (tsconfig.json, jest.config.js, etc.)
```

### Folder Purposes

#### `index.html`
A fallback homepage used by browser-based IDEs. Not needed in production frameworks.

#### `public/`
Static assets like images, logos, and icons. Automatically served by Vite.

#### `src/backend/` – Backend Structure (No runtime logic, just scaffolding)

| Folder | Purpose |
|--------|---------|
| `api/` | API route placeholders (Edge Functions or REST endpoints) |
| `db/` | Supabase or DB client initialization |
| `services/` | Backend-focused business logic (e.g., billing, workflows) |
| `repositories/` | Data access logic (e.g., call Supabase) |
| `types/` | Internal backend-only TypeScript types |

---

### `mocks/`
Mock Service Worker (MSW) setup for local or test mocking of APIs.

### `tests/`
Organized by test level:
- `unit/` – isolated functions and logic
- `integration/` – services + components
- `e2e/` – full flow tests (e.g., Cypress)

---

### `.github/workflows/ci.yml`
GitHub Actions config for continuous integration (testing, linting, etc.).

### `.storybook/`
Optional – Storybook setup for developing and previewing components in isolation.

### `.env`, `.env.test`
Environment variable files for local dev and testing.

### `Dockerfile`, `docker-compose.yml`
Optional containers for local dev, CI pipelines, or deployment.

---

### Tool Configs

- `tsconfig.json` – TypeScript project configuration
- `jest.config.js` – Unit test runner setup
- `cypress.config.ts` – End-to-end test runner setup
- `commitlint.config.js` – Git commit message validation

---

## 🧪 Scripts

```bash
npm run dev          # Start local dev server
npm run test         # Run unit tests
npm run lint         # Lint the codebase
npm run type-check   # Run TypeScript checks
```

---

## ✅ Principles Followed

- **Modular Monolith**: Clean separation of domains, services, and UI layers
- **Environment Agnostic**: No Node.js globals (e.g., `process.env`) used directly
- **Browser IDE Compatible**: Lovable.dev, Bolt.new, Cursor
- **Ready for CI & GitHub**: Includes workflows and container config
- **Future-Ready**: Can evolve into microservices or full-stack backend

---

## 📄 License

[MIT](LICENSE) © Patrick Ndifon
