// Importa o Express
const express = require('express');
const app = express();

// Define a porta
const PORT = process.env.PORT || 3030;

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo a EVN Expedição!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
       

