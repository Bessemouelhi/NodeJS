const http = require('http'); // importation du module http et stockage dans une variable du même nom
let fs = require('fs');
const server = http.createServer( // accès à la méthode createServer
    (Request, Response)=>{
        let fichier = "";
        console.log("Server created successfully.")
        Response.setHeader("Content-Type","text/html;charset=utf8"); 
        
 //       console.log(Request.method) // renvoit GET qui est la méthode utilisée lors d'une requête
 //       console.log(Request.url);    // renvoit /
        if((Request.url === '/' || Request.url === '/home') && Request.method === 'GET'){
            fichier = "./HTML/index.html";
        } else if(((Request.url === '/profil') && Request.method === 'GET')){
            fichier = "./HTML/profil.html";
        } else if ((( Request.url === '/contact') && Request.method === 'GET')){
            fichier = "./HTML/contact.html";
        }
        else {
            fichier = "./HTML/404.html";
        }
        fs.readFile(fichier, 
            (Error, Data) => {
                if(Error) {
                    console.log(Error);
                    Response.end();
                } else {
                    Response.write(Data);
                    Response.end();
                }
            })

        //Response.end();
    } // fonction callback car fonction passé en paramètre qui affiche un message de succès dans la console
);
server.listen(8080, "localhost" , () => { // 3 paramètres: port, domaine, fonction callback
    console.log("Server listening on port 8080");
})

//page contact page profil et home et page 404
// Enoncé sofiane node server

// Une fois que nous avons fini l’exercice et tester nos url dans la barre d’adresse, nous pouvons constater que cela fonctionne très bien, mais nous aimerions en faire plus. 

// En effet nous voudrions afficher directement sur la page la réponse car l’utilisateur ne navigue pas en regardant la console mais bien en affichant des pages. Voyons cela ensemble :
// Tout d’abord il faut savoir que lorsque nous envoyons une requête à un serveur il est possible de lui passer des informations sur cette requête dans ce que nous appelons le header. Il en va bien sûr de même pour la réponse, ce qui nous permettra de définir le genre de réponse que le serveur renverra. Par exemple le format de la réponse (text, html, json, etc…) ou encore quel port à le droit d’effectuer la requête c’est ce que l’on appel le CORS (cross-origin resource sharing) qui par défaut ne permet qu'aux requêtes qui proviennent du même serveur et utilisent le même port de s'exécuter.
// Bien définissons ensemble l’en-tête de la réponse par exemple “text/plain”. Pour ça on utilisera la méthode “setHeader” sur l'objet Response, qui prend en paramètre la clé (“content-type”) et la valeur de l’en-tête. Puis dans les conditions au lieu du “console.log” nous utiliserons “Response.write” pour écrire sur le document. Enfin nous finirons par un Response.end() pour dire au serveur d'arrêter l'exécution de la réponse une fois qu’il a fini ses vérifications.

// A l'aide de ce que nous venons de voir et des recherches internet si nécessaire, suivre les instructions pour voir s’afficher les messages appropriés sur les pages consultées.