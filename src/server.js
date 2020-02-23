const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  res.send(db.getProducts())
});

app.get('/products/:id', (req, res) => {
  res.send(db.getProduct(req.params.id))
});

app.post('/products', (req, res) => {
  const produto = db.saveProduct({
    name: req.body.name,
    price: req.body.price
  });

  res.send(produto)
});

app.put('/products/:id', (req, res) => {
  const produto = db.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  });

  res.send(produto)
});

app.delete('/products/:id', (req, res) => {
  const product = db.destroyProduct(req.params.id);
  res.send(product)
});

app.listen(3003);