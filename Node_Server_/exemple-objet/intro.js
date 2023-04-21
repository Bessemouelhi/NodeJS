// var prenom = "Sofiane";
// console.log(prenom);

// const salut = (nom) => {
//     console.log("Bonjour je m'appelle " + nom);
// }

// salut("Marie-Claire");
// salut("Romain");

const {eleves,cours} = require('./simplon.js'); // simplon est donc un module (meilleure séparation du code, meilleure maintenabilité et lisibilité du code)
console.log(eleves); // donne accès au code mais pas à utiliser le code de simplon
// afin de pouvoir rendre accessible ET utilisable le code de simplon il va falloir exporter/exposer le module en entier ou certains éléments
// pour contourner le probleme on rajoute module.exports(nomde la variable dont on a besoin) = DESTRUCTURING
// on stocke dans la variable simplon le require etc et on console log simplon, on affichera dans la console la variable eleves qui est défini dans simplon

console.log(cours);

const system = require ('fs');
console.log(system.accessSync);

// const system = require ('os');
// console.log(system.userInfo());

// rq: toute les méthodes par nature sont asynchrones ici
// rajouter sync pour les rendre synchrone

// l'objet erreur
// erreur est une instance de l'objet erreur 
// soit étend la classe erreur contennu dans el module error

// throw new Error('Il y a une nouvelle erreur');

// try {
// uneFonctionNonExistante();
// }catch(error){
// console.error("la fonction n'existe pas", error);
// }

doSomething().then(doSomething2).then(doSomething3)
.catch(err => console.error("La promesse n'as pu être complétée", err));