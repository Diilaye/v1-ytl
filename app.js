const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'web')));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
