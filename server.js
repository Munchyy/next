const express = require('express');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
console.log(dev ? 'In dev mode' : 'In production mode');
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(8080, (err) => {
      if (err) throw err;
      console.log('> listening on port 8080...');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
