# 📚 Catálogo de Livros

Aplicação web para organizar sua lista de leitura, desenvolvida com React e TypeScript. Permite adicionar, remover e acompanhar o status de leitura dos seus livros com persistência em API.

## Demonstração

> Adicione, filtre e gerencie seus livros com status "Lido" ou "Não lido" em tempo real.

---

## Tecnologias

- **React 18** — biblioteca de interface
- **TypeScript** — tipagem estática
- **Vite** — bundler e servidor de desenvolvimento
- **Axios** — requisições HTTP
- **CrudCrud** — API REST sem backend próprio

---

## Funcionalidades

- Listar todos os livros cadastrados
- Adicionar livro com título, autor e status
- Remover livro da lista
- Alternar status entre "Lido" e "Não lido"
- Filtrar por abas: Todos / Lidos / Não lidos
- Feedback de loading e erros de requisição

---

## Estrutura do projeto

```
src/
├── components/
│   ├── BookForm/
│   │   └── BookForm.tsx      # Formulário de cadastro
│   ├── BookList/
│   │   └── BookList.tsx      # Lista com filtro por abas
│   └── BookItem/
│       └── BookItem.tsx      # Card individual do livro
├── services/
│   └── api.ts                # Camada de integração com a API
├── types/
│   └── book.ts               # Interfaces e types TypeScript
├── App.tsx                   # Componente raiz e estado global
└── index.css                 # Estilos globais mobile-first
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/lucassloliveira/catalogo-livros.git

# Entre na pasta
cd catalogo-livros

# Instale as dependências
npm install
```

Acesse [crudcrud.com](https://crudcrud.com), copie o endpoint gerado e atualize a constante em `src/services/api.ts`:

```ts
const API_URL = 'https://crudcrud.com/api/SEU_ENDPOINT/livros'
```

```bash
# Rode o projeto
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Aprendizados

Projeto desenvolvido como exercício acadêmico no curso Full Stack Java — EBAC. Conceitos praticados:

- Tipagem com `interface`, `type`, `Omit` e union types
- Generics do TypeScript em chamadas axios
- `useState` e `useEffect` com tipagem correta
- Lifting state up e callback props
- Separação de responsabilidades com camada de serviço
- Tratamento de erros com `try/catch/finally`
- Estilização mobile-first com CSS puro

---

## Autor

Desenvolvido por **Lucas** — [GitHub](https://github.com/lucassloliveira)
