const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
    console.log('Requete effectué : ' + Date().toString());
    next()
})

app.get('/', function (req, res) {
    res.status(200).sendFile('/HTML/index.html', {root:__dirname})
})

app.get('/home', function (req, res) {
    res.redirect('/');
})

app.get('/contact', function (req, res) {
    res.status(200).sendFile('/HTML/contact.html', {root:__dirname})
})

app.get('/profil', function (req, res) {
    res.status(200).sendFile('/HTML/profil.html', {root:__dirname})
})

app.get('/product', function (req, res) {
    res.status(200).sendFile('/HTML/product.html', {root:__dirname})
})

app.use((req, res) => {
    res.status(404).sendFile('/HTML/404.html', {root:__dirname})
})

app.listen(port, () => {
    console.log("Server listening on port " + port);
})