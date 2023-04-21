const http = require('http');
const fs = require('fs');
const server = http.createServer(
    (Requeste, Response) => {
        let fichier = "";
        console.log("Server created successfully.")
        Response.setHeader('content-type', 'text/html; charset=utf8')
        if ((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET') {
            Response.write('<p>vous êtes sur la home page</p>');
        } else if (Requeste.url === '/profil' && Requeste.method === 'GET') {
            Response.write('<p>vous êtes sur la page profil</p>');
        } else if (Requeste.url === '/contact' && Requeste.method === 'GET') {
            Response.write('<p>vous êtes sur la page contact</p>');
        } else {
            Response.write('<p>404 page non valide</p>');
        }
        Response.end();
    }
);
server.listen(8080, "localhost", () => {
    console.log("Server listening on port 8080");
})