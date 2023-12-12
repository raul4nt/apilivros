const express = require('express');
const bodyParser = require('body-parser');
const livroRouter = require('./router/livroRouter');
const authRouter = require('./router/authRouter');
const clienteRouter = require('./router/clienteRouter');
const autorRouter = require('./router/autorRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à API de Livros!</h1>');
});

app.use('/api/auth', authRouter);

app.use('/api/livros', livroRouter);

app.use('/api/clientes', clienteRouter);

app.use('/api/autores', autorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
