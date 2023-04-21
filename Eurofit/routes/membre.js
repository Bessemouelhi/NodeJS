const {
    connection
} = require('../server')

const path = (app) => {
    app.get('/membre', (req, res) => {
        console.log('req.query', req.query);
        if (Object.keys(req.query).length === 0) {
            console.log("vide");
            connection.query('SELECT * FROM membres JOIN abonnement using (id_abonnement);',
                [],
                (error, results) => {
                    if (error) throw error;
                    res.json(results);
                })
        } else {
            const name = req.query.name.toLowerCase()
            console.log(name);
            connection.query('SELECT * FROM membres WHERE prenom_membres LIKE ?;',
                ['%'+name+'%'],
                (error, results) => {
                    if (error) throw error;
                    res.json(results);
                })
        }

    })

    app.get('/membres', (req, res)=>{
        connection.query('SELECT m.nom_membres, m.prenom_membres, m.tel, m.mail, c.nom_club, a.titre FROM membres m INNER JOIN club c ON m.id_club = c.id_club INNER JOIN abonnement a ON m.id_abonnement = a.id_abonnement;', 
        [],
        (err, results)=>{
          if (err) throw err;
          res.json(results)
        })
      })

    app.get('/membre/:id', (req, res) => {
        const id = req.params.id;
        connection.query('SELECT * FROM membres WHERE id_membres = ?;',
            [id],
            (error, results) => {
                if (error) throw error;
                res.json(results);
            })
    })

    app.get('/membre/lastname/:name', (req, res) => {
        const name = req.params.name;
        console.log(name);
        console.log(req.params);
        connection.query(`SELECT * FROM membres WHERE prenom_membres LIKE ?;`,
            ['%' + name + '%'],
            (error, results) => {
                if (error) throw error;
                res.json(results);
            })
    })
}

module.exports = path;