const taskService = require('../services/taskService');

function createTask(req, res, body) {
  const { title } = JSON.parse(body);

  const task = taskService.createTask(title);

  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(task));
}

function getTasks(req, res) {
  const tasks = taskService.getTasks();

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasks));
}

function updateTask(req, res, id, body) {
  const { title, completed } = JSON.parse(body);

const updated = taskService.updateTask(id, title, completed);

  if (!updated) {
    res.writeHead(404);
    return res.end(JSON.stringify({ message: 'Tarefa não encontrada' }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(updated));
}

function deleteTask(req, res, id) {
  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    res.writeHead(404);
    return res.end(JSON.stringify({ message: 'Tarefa não encontrada' }));
  }

  res.writeHead(200);
  res.end(JSON.stringify({ message: 'Removida' }));
}

function getTaskById(req, res, id) {
  const task = taskService.getTaskById(id);

  if (!task) {
    res.writeHead(404);
    return res.end(JSON.stringify({ message: 'Tarefa não encontrada' }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(task));
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById
};