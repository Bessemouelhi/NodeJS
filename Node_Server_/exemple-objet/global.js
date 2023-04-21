// console.log(global);
// setInterval(()=>{
//     console.log("Salut");
// }, 3000)


//control D pour sortir de node
// control C pour arreter une execution

// certains objets n'existent que dans le cadre des modules
// ils ressemblent à des objets globaux, ont le comportement mais n'en sont pas

console.log(__dirname); // chemin courant
console.log('mon log :',__dirname);
console.log('mon fichier :',__filename);

// il y a export, module(bloc de code qui contient ses propres fonctions et qui est séparé du reste du code), require etc