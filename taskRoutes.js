const taskController = require('../controllers/taskController');

function handleRoutes(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET') {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify({ message: 'API To-Do List funcionando' }));
}

  if (url === '/tasks' && method === 'GET') {
    return taskController.getTasks(req, res);
  }

  if (url === '/tasks' && method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      taskController.createTask(req, res, body);
    });

    return;
  }

  if (url.startsWith('/tasks/') && method === 'GET') {
  const id = parseInt(url.split('/')[2]);
  return taskController.getTaskById(req, res, id);
}

  if (url.startsWith('/tasks/') && method === 'PUT') {
    const id = parseInt(url.split('/')[2]);

    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      taskController.updateTask(req, res, id, body);
    });

    return;
  }

  if (url.startsWith('/tasks/') && method === 'DELETE') {
    const id = parseInt(url.split('/')[2]);
    return taskController.deleteTask(req, res, id);
  }

  // rota não encontrada
  res.writeHead(404);
  res.end(JSON.stringify({ message: 'Rota não encontrada' }));
}

module.exports = handleRoutes;