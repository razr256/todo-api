# todo-api
# API To-Do List

Projeto desenvolvido para a disciplina de Programação Web II.

##  Descrição

Esta é uma API REST de gerenciamento de tarefas (To-Do List), desenvolvida utilizando Node.js puro, sem frameworks.

A aplicação permite realizar operações completas de CRUD (Create, Read, Update, Delete), além de implementar persistência de dados em arquivo JSON.

---

##  Tecnologias utilizadas

- Node.js
- Módulo HTTP nativo
- Módulo FS (File System)

---

##  Funcionalidades

- Criar tarefas (POST)
- Listar todas as tarefas (GET)
- Buscar tarefa por ID (GET por ID)
- Atualizar tarefa (PUT)
- Deletar tarefa (DELETE)
- Persistência de dados em arquivo JSON (nível MB)

---

##  Rotas da API

###  GET /tasks
Lista todas as tarefas

---

###  GET /tasks/:id
Busca uma tarefa pelo ID

**Resposta de erro:**
```json
{
  "message": "Tarefa não encontrada"
}
