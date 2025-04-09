# 🧑‍💼 user-management-cli

> A blazing-fast CLI tool for user management built with **TypeScript**, **SWC**, and **tsx**. Easily create, update, and delete users from the command line.

![License](https://img.shields.io/github/license/sobhan-yaghoubi/user-management-cli)
![Node](https://img.shields.io/badge/node-%3E%3D18.x-green)
![Built With](https://img.shields.io/badge/Built%20With-TypeScript%2C%20SWC%2C%20tsx-blue)

---

## 📌 Description

`user-management-cli` is a modern, high-performance CLI that helps developers manage users with ease. Whether you're prototyping, building a SaaS backend, or handling database-driven users – this tool streamlines the process.

Built with:

- **TypeScript** – for type-safe development  
- **SWC** – lightning-fast compiler written in Rust  
- **tsx** – run TypeScript files without manual builds  

---

## 🚀 Features

- 🔧 Create, update, delete, and view users  
- ⚡ Instant development with hot-reloading (`tsx watch`)  
- 🔐 Password hashing with `bcryptjs`  
- 💬 Interactive prompts via `inquirer`  
- 🧩 Flexible command parsing via `commander`  
- 🧪 Prisma ORM integration ready  

---

## 🧰 Tech Stack

| Tool       | Purpose                      |
|------------|------------------------------|
| TypeScript | Language                     |
| tsx        | Dev-time execution           |
| SWC        | Build & transpilation        |
| Prisma     | Database ORM                 |
| bcryptjs   | Password hashing             |
| inquirer   | Interactive terminal prompts |
| commander  | CLI command parsing          |

---

## 📦 Installation

```bash
git clone https://github.com/sobhan-yaghoubi/user-management-cli.git
cd user-management-cli
npm install
```

---

## ⚙️ Usage

### 🛠 Development Mode

Run with live reload and TypeScript:

```bash
npm run dev
```

### 🚀 Build for Production

Compile with SWC:

```bash
npm run build
```

### 🔄 Start from Built Files

Runs the compiled JS from `/dist`:

```bash
npm start
```

---

## 📖 Example Usage

```bash
npx tsx src/index.ts
```

Then follow the prompts to create, update, delete, or view users.

---

## 📂 Directory Structure

```
user-management-cli/
├── src/                # CLI source code
│   └── index.ts        # CLI entry point
├── prisma/             # Prisma schema + migrations
├── dist/               # Built JS output (after build)
├── package.json
├── tsconfig.json
```

---

## 🤝 Contributing

Contributions are welcome!

```bash
git checkout -b feature/your-feature-name
git commit -m "Add: your feature"
git push origin feature/your-feature-name
```

Then open a PR 🚀

---

## 🔍 SEO Keywords

`user-management`, `typescript cli`, `cli user manager`, `command-line tool`,  
`swc`, `tsx`, `nodejs cli`, `prisma`, `typescript orm cli`,  
`bcryptjs`, `developer tools`, `modern cli stack`, `2025 cli tools`

---

## 📄 License

MIT © [Sobhan Yaghoubi](https://github.com/sobhan-yaghoubi)