const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.getConnection((error, connection) => {
        if (error) {
            console.error(error);
            res.status(500).render('erreur', {error})
        } else {
            connection.query('SELECT * FROM list', [], (error, data) => {
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).render('index', {data})
                }
            })
        }
    })
});

router.post('/list', (req, res) => {
    console.log(req.body);
    let id = req.body.id === "" ? null : req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let reqeteSQL = id === null ? 'INSERT INTO list (title, description) values (?, ?)'
                                : 'UPDATE list SET title = ?, description = ? WHERE id = ?';
    let data = id === null ? [title, description] : [title, description, id];

    req.getConnection((error, connection) => {
        if (error) {
            console.error(error);
            res.status(500).render('erreur', {error})
        } else {
            connection.query(reqeteSQL, 
            data, (error, data) => {
                if (error) {
                    console.error(error);
                } else {
                    res.status(302).redirect('/')
                }
            })
        }
    })
})

router.delete('/list/:id', (req, res) => {
    let id = req.params.id;
    req.getConnection((error, connection) => {
        if (error) {
            console.error(error);
            res.status(500).render('erreur', {error})
        } else {
            connection.query('DELETE FROM list WHERE id = ?', [id], (error, data) => {
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).json({routeRacine : '/'})
                }
            })
        }
    })
})

module.exports = router;