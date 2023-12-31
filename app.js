const express = require('express');
const app = express();
const port = 3000;

module.exports = app;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!, Daniel Sebastian Reynoso Feliz 2021-1571');
});

const servidor = app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

setTimeout(() => {
  console.log('Cerrando el puerto del servidor')
  servidor.close();
}, 10000);
