const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const port = 3000;
const listeRoutes = require('./routes/listesRoutes');
const optionBDD = {
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 3306,
    database: 'todolist'
};

const prenom = "bessem";
const pers = {
    name: "bessem",
    age: 30
};
const list = [{
        title: "Apprendre HTML/CSS",
        desc: "Lorem ipsum dolor"
    },
    {
        title: "Apprendre Javascript",
        desc: "sit amet consectetur adipisicing elit"
    },
    {
        title: "Apprendre NodeJS",
        desc: "Pariatur dolore ratione iusto"
    }
];

app.use(myConnection(mysql, optionBDD, 'pool'));
app.use(express.static('public')) //definition des ressources static
app.set('views', './IHM') //definition du chemin de mes views
app.set('view engine', 'ejs') //definition du moteur de views
app.use(express.urlencoded({extended: false}))
app.use(listeRoutes);//J'utilise le component d'acces aux données pour liste

// app.get('/', function (req, res) {
//     res.status(200).render('index', {pers, list})
// })

app.get('/apropos', function (req, res) {
    res.status(200).render('apropos', {
        pers
    })
})

app.use((req, res) => {
    res.status(404).render('404', {
        pers
    })
})

app.listen(port, () => {
    console.log("Server listening on port " + port);
})