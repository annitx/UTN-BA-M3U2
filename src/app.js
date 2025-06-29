const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const categoriasRouter = require('./routes/categorias');
const serviciosRouter = require('./routes/servicios');
const contactoRouter = require('./routes/contacto');
const ofertasRouter = require('./routes/ofertas');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/', categoriasRouter);
app.use('/', serviciosRouter);
app.use('/', contactoRouter);
app.use('/', ofertasRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});