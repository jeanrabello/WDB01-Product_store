# MERN Product Store 🛍️

Este é um projeto fullstack desenvolvido com a stack MERN (MongoDB, Express, React e Node.js), criando uma loja de produtos com um CRUD simples. O frontend foi construído com React e Chakra UI, enquanto o backend utiliza Express e Mongoose para manipulação do banco de dados MongoDB.

## Funcionalidades 🛒

- Temas Dark e Light
- Listagem de produtos
- Criação de novos produtos
- Edição de produtos existentes
- Remoção de produtos

## Tecnologias utilizadas 🛠️

#### Frontend 🎨

- React 19 - Biblioteca para construção da interface.
- Vite - Ferramenta de build para desenvolvimento rápido.
- Chakra UI - Biblioteca de componentes para estilização.
- React Router DOM - Gerenciamento de rotas.
- Zustand - Gerenciamento de estado global.
- Framer Motion - Animações fluidas.

#### Backend ⚙️

- Node.js + Express - Servidor backend.
- Mongoose - Modelagem e manipulação do MongoDB.
- Dotenv - Gerenciamento de variáveis de ambiente.
- Nodemon - Hot reload para desenvolvimento.

## Estrutura do Projeto 📁📜🛠️

```
📦
├── 📂 backend
│   ├── 📂 config
│   │   └── 📄 db.js
│   ├── 📂 controllers
│   │   └── 📄 product.controller.js
│   ├── 📂 models
│   │   └── 📄 product.model.js
│   ├── 📂 routes
│   │   └── 📄 product.route.js
│   └── 📄 server.js
├── 📂 frontend
│   ├── 📄 eslint.config.js
│   ├── 📄 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📂 public
│   │   └── 📄 vite.svg
│   ├── 📂 src
│   │   ├── 📄 App.jsx
│   │   ├── 📂 components
│   │   │   ├── 📄 Navbar.jsx
│   │   │   └── 📄 ProductCard.jsx
│   │   ├── 📄 main.jsx
│   │   ├── 📂 pages
│   │   │   ├── 📄 CreatePage.jsx
│   │   │   └── 📄 HomePage.jsx
│   │   └── 📂 store
│   │       └── 📄 product.js
│   └── 📄 vite.config.js
├── 📄 README.md
├── 📄 package-lock.json
└── 📄 package.json
```

## Variáveis de Ambiente🌳

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGO_URI`

`PORT`

## Rodando localmente 🔃

Clone o projeto ⬇️

```bash
  git clone https://github.com/jeanrabello/WDB01-Product_store.git
```

Entre no diretório do projeto 📁

```bash
  cd WDB01-Product_store
```

Backend📡🛠️

1. Instale as dependências:

```bash
  npm install
```

2. Inicie o servidor:

```bash
  npm run dev
```

Frontend 🎨📱

1. Instale as dependências:

```bash
  cd frontend && npm install
```

2. Inicie o frontend:

```bash
  npm run dev
```

## Capturas de Tela 📸

### Listagem de Produtos 🛒

![Listagem de produtos - Light mode](https://github.com/user-attachments/assets/2417942b-804f-4052-bd0c-ac8e3c1fa10b)

![Listagem de produtos - Dark mode](https://github.com/user-attachments/assets/cf70bcea-edfa-45fd-a012-d11523421a0f)

### Criação de Produtos 📝

![Criação de Produtos - Light mode](https://github.com/user-attachments/assets/7661bdcb-4769-4452-8f30-09eaff8a121b)

![Criação de Produtos - Dark mode](https://github.com/user-attachments/assets/f6a21ade-cb31-4a17-a772-2532edfb36d3)

## Referência

- [100 Hours Web Development Bootcamp - Build 22 React Projects](https://www.udemy.com/course/the-web-dev-bootcamp/?couponCode=KEEPLEARNINGBR)
