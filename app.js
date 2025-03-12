const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'web')))

app.get('*', (req, res) => {
    // Obtenir le chemin (path)
    const path = req.path;

    res.redirect('/');

});

app.get('/', (req, res) => {
    // Obtenir le chemin (path)
    const path = req.path;

   req.sendFile(path.join(__dirname, 'web', 'index.html'));

});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
