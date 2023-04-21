const {
    connection
} = require('../server')

const path = (app) => {
    app.get('/abonnement', (req, res) => {
        connection.query('SELECT * FROM abonnement;',
            [],
            (error, results) => {
                if (error) throw error;
                res.json(results);
            })
    })

    app.get('/abonnement/:id', (req, res) => {
        const id = req.params.id;
        console.log(req.params);
        connection.query('SELECT * FROM abonnement WHERE id_abonnement = ?;',
            [id],
            (error, results) => {
                if (error) throw error;
                res.json(results);
            })
    })

    app.post('/abonnement', (req, res) => {
        console.log(req.body);
        const {
            titre,
            tout_club,
            toutes_salles,
            tout_pays,
            reduc_complement,
            reduc_medecine,
            reduc_coach,
            tarif
        } = req.body;
        connection.query('INSERT INTO abonnement (titre, tout_club,toutes_salles,tout_pays,reduc_complement,reduc_medecine,reduc_coach,tarif) VALUES (?,?,?,?,?,?,?,?);',
            [titre,
                tout_club,
                toutes_salles,
                tout_pays,
                reduc_complement,
                reduc_medecine,
                reduc_coach,
                tarif
            ],
            (error, results) => {
                if (error) {
                    res.status(500).send('Erreur serveur')
                } else {
                    res.status(201).send('Abonnement ajouté avec succès')
                }
                //res.json(results);
            })
    })

    const quote = (val) => typeof val === 'string' ? `"${val}"` : val;

    const updateQuery = (table, criteria, update) =>
        `UPDATE ${table} SET ${Object.entries(update)
    .map(([field, value]) => `${field}=${quote(value)}`)
    .join(', ')} WHERE ${Object.entries(criteria)
    .map(([field, value]) => `${field}=${quote(value)}`)
    .join(' AND ')}`;

    function prepQuery(table, obj, id) {
        let myQuery = 'UPDATE '+ table +' SET ';
        if (Object.keys(obj).length > 0) {

            Object.keys(obj).forEach((value, key) => {
                if (key == 0) {
                    myQuery += value + ' = ' + quote(obj[value]);
                } else {
                    myQuery += ', ' + value + ' = ' + quote(obj[value]);
                }
                console.log(value, obj[value]);
            })
            myQuery += '  WHERE id_abonnement = ' + id + ';';
            console.log('myQuery', myQuery);
        }

        return myQuery;
    }

    app.patch('/abonnement/:id', (req, res) => {
        const id_abo = req.params.id;
        console.log(Object.keys(req.body));
        //let myquery = prepQuery(req.body, id_abo);
        /*const mQuery = updateQuery(
            'abonnement', {
                'id_abonnement': id_abo
            },
            req.body
        );*/
        const mQuery = prepQuery('abonnement', req.body, id_abo)
        console.log(mQuery);
        connection.query(mQuery,
            [],
            (error, results) => {
                //if (error) throw error;
                if (results.affectedRows === 0) {
                    res.status(500).send('Abonnement non trouvé')
                } else {
                    res.status(201).send('Abonnement modifié avec succès')
                }
                //res.json(results);
            })
    })

    /*[titre,
        tout_club,
        toutes_salles,
        tout_pays,
        reduc_complement,
        reduc_medecine,
        reduc_coach,
        tarif, id_abo]*/

    app.delete('/abonnement/:id', (req, res) => {
        const id_abo = req.params.id;
        connection.query('DELETE FROM abonnement WHERE id_abonnement = ?;',
            [id_abo],
            (error, results) => {
                if (error) throw error;
                if (results.affectedRows === 0) {
                    res.status(404).send('Abonnement non trouvé')
                } else {
                    res.status(200).send('Abonnement supprimé avec succès')
                }
                //res.json(results);
            })
    })
}

module.exports = path;