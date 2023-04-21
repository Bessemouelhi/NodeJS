const {
    connection
} = require('../server')

const path = (app) => {
    app.get('/club', (req, res) => {
        connection.query('SELECT * FROM club;',
            [],
            (error, results) => {
                if (error) throw error;
                res.json(results);
            })
    })
}

module.exports = path;