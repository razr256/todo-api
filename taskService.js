const Task = require('../models/taskModel');

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'tasks.json');

function readTasks() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function createTask(title) {
  const tasks = readTasks();

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  writeTasks(tasks);

  return newTask;
}

function getTasks() {
  return readTasks();
}

function updateTask(id, title, completed) {
  const tasks = readTasks();

  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  if (title !== undefined) {
    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  writeTasks(tasks);

  return task;
}

function deleteTask(id) {
  let tasks = readTasks();

  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== id);

  if (tasks.length === initialLength) return false;

  writeTasks(tasks);
  return true;
}

function getTaskById(id) {
  const tasks = readTasks();
  return tasks.find(t => t.id === id);
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById
};