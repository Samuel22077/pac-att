const express = require('express');
const app = express();

// libera a pasta public
app.use(express.static('public'));

// porta 80 (OBRIGATÓRIO)
const PORT = 80;

// inicia servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 80');
});