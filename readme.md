# 🎙️ Podcast Manager

## 📖 Descrição

O **Podcast Manager** é uma API desenvolvida em Node.js e TypeScript inspirada em plataformas de streaming, com o objetivo de centralizar episódios de podcasts em vídeo organizados por categorias.

A aplicação permite listar episódios e filtrar podcasts por nome, facilitando a navegação e busca de conteúdo.

---

# 🚀 Funcionalidades

- 📂 Listar episódios de podcasts por categorias
- 🔍 Filtrar episódios pelo nome do podcast
- 📺 Centralizar podcasts em vídeo
- ⚡ API simples utilizando Node.js nativo

---

# 🧠 Categorias Disponíveis

- Saúde
- Fitness
- Mentalidade
- Humor
- Esporte
- Bodybuilder
- Corrida

---

# 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- HTTP nativo
- REST API

---

# 📡 Endpoints

## 🔹 Listar episódios

### Request

```http
GET /list
```

### Response

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "category": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "category": ["esporte", "corrida"]
  }
]
```

---

## 🔹 Filtrar episódios por nome do podcast

### Request

```http
GET /episode?p=flow
```

### Response

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319"
  }
]
```

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/Willj92/node-ts-webapi-without-frameworks-podcast-manager
```

---

## 2️⃣ Instale as dependências

```bash
npm install
```

---

## 3️⃣ Execute o projeto

```bash
npm run start:dev
```

---

# 📚 Objetivo do Projeto

Este projeto foi desenvolvido com foco em prática de:

- Criação de APIs REST
- Estruturação de rotas
- Manipulação de requisições HTTP
- TypeScript
- Organização de código
- Arquitetura básica backend

---

# 👨‍💻 Autor

Wilson Linhares

- GitHub: https://github.com/Willj92
- LinkedIn: https://www.linkedin.com/in/wilson-linhares/
