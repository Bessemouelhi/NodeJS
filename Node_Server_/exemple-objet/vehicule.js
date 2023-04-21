'use strict';

var objet = {
    i: 10,
    b: () => console.log(this.i, this), // pour avoir la valeur de i et la valeur de l'objet entier
    c: function(){
        console.log(this.i,this);
    }
}

// // création d'un objet avec ses propriétés qui sont définis par une clé et une valeur
// var voiture = { 
//     cheveaux : 4,
//     annee : 2023,
//     portes : 5,
//     couleur : "rose",
//     carburant : "diesel"
// }

// // pour accéder à la valeur de l'objet de l'extérieur
// console.log(voiture.annee);

// pour accéder à l'objet de l'intérieur de l'objet on utilise this
objet.b(); // depuis l'extérieur la fonction fléché ne fonctionne pas
objet.c();
console.log(objet.i,objet);
() => {console.log(objet.i, objet)};