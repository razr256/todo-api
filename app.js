const http = require('http');
const handleRoutes = require('./routes/taskRoutes');

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});