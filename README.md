# 🚀 SaaS Starter Kit

This is a modular monolith starter scaffold built for use with:
- [Lovable.dev](https://lovable.dev)
- [Bolt.new](https://bolt.new)
- [Cursor IDE](https://cursor.sh)
- [Supabase](https://supabase.com)
- [Clerk](https://clerk.dev)

It follows modern frontend-first principles using React, Vite, Tailwind CSS, and TypeScript, and is backed by Supabase and Clerk for backend and authentication.

---

# 🧱 SaaS Starter Kit – Scaffold Documentation

This document describes the file and folder structure of the SaaS Starter Kit. It is built to support a modular monolith architecture, compatible with Lovable.dev, Bolt.new, Cursor IDE, Supabase, and Clerk.

---

## 📁 Folder Structure Overview

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

---

## 🧩 Detailed Folder Roles

### `index.html`
A fallback homepage used by browser-based IDEs. Not needed in production frameworks.

### `public/`
Static assets like images, logos, and icons. Automatically served by Vite.

---

### `src/` – Source Code

| Folder | Purpose |
|--------|---------|
| `application/` | High-level use cases and orchestration logic (e.g., invite flow) |
| `components/` | Reusable presentational components (UI widgets) |
| `context/` | Global React context (e.g., TenantProvider, Theme) |
| `hooks/` | Custom React hooks for logic reuse |
| `pages/` | Page-level React components or routes |
| `providers/` | Wrapper providers (e.g., for Clerk, QueryClient) |
| `domains/` | Domain-specific business logic (e.g., Billing, Tenant) |
| `config/` | Global constants and `env.ts` for environment settings |
| `lib/` | Shared utilities (e.g., logger, fetch wrapper) |
| `shared/` | Cross-cutting concerns like types and validators |

---

### `src/backend/` – Backend Structure (No runtime logic, just scaffolding)

| Folder | Purpose |
|--------|---------|
| `api/` | API route placeholders (Edge Functions or REST endpoints) |
| `db/` | Supabase or DB client initialization |
| `services/` | Backend-focused business logic (e.g., billing, workflows) |
| `repositories/` | Data access logic (e.g., call Supabase) |
| `types/` | Internal backend-only TypeScript types |

This structure keeps business logic modular and portable between Supabase Edge Functions, API routes, or other service environments.

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

---

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

## ✅ Principles Followed

- **Modular Monolith**: Clean separation of domains, services, and UI layers
- **Environment Agnostic**: No Node.js globals (e.g., `process.env`) used directly
- **Browser IDE Compatible**: Lovable.dev, Bolt.new, Cursor
- **Ready for CI & GitHub**: Includes workflows and container config
- **Future-Ready**: Can evolve into microservices or full-stack backend

---

## 📎 Notes

- You can implement backend logic inside `src/backend/` or via Supabase Edge Functions.
- Supabase RLS (Row Level Security) is strongly recommended for multi-tenant security.
- Clerk provides auth; Supabase provides DB, file storage, and optionally functions.



