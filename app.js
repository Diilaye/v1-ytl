const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'web')))
app.use(express.json());

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

app.post('/api/v1/sendContact', (req, res) => { 
    let {  message, email } = req.body;
    // Récupération des données
    const transporter = require('nodemailer').createTransport({
        service: 'IMAP',
        host:  'ssl0.ovh.net',
        port: 143,
        secure: true, // Utilisez true si vous utilisez SSL/TLS
        auth: {
            user: 'concoursc3syma@c3s.sn',
            pass: 'Yaatalmbinde2018'
        }
    });

       // Définir les informations de l'e-mail
       mailOptions = {
        from: '"Yaatambinde" <support@yaatalmbinde.sn>',
        to: email,
        subject: "Message de contact",
        html: ` <h1> ${message} </h1`,
    };

         

        
        // Envoyer l'e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Erreur lors de l\'envoi de l\'e-mail:', error);

            } else {
                console.log(info);
                
                console.log('E-mail envoyé avec succès:', info.response);

            }
        });
}
);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
