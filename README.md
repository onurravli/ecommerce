> [!WARNING]
> As of November 14, 2024, this project is under development.

# E-Commerce

An example project to learn about microservices architecture.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)

## Project Structure

### Apps

- [API Gateway](./apps/api) (Express.js)
- [Client](./apps/client) (Next.js)

### Services

- [Auth Service](./services/auth) (Express.js)
- [Users Service](./services/users) (Express.js)
- And so on... (But not yet.)

### Packages

- [Shared](./packages/shared) (TypeScript)
- [TypeScript Config](./packages/typescript) (TypeScript)

## Getting Started

1. Clone the monorepo

```bash
git clone git@github.com:onurravli/e-commerce.git
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.development # or .env.production
npm run setenv:dev # or npm run setenv:prod
```

4. Run the project

```bash
npm run dev
```
