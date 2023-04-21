const fs = require('fs');
// if (fs.existsSync('./monDossier')){
//     fs.rmdir('./monDossier', (Error) => {
//         if(Error){
//             console.error(Error);
//         } else {
//             console.log('dossier supprimé')
//         }
//     })
// } else {
//     fs.mkdir('./monDossier', (Error)=>{
//         if(Error){
//             console.error(Error);
//         } else {
//             console.log('dossier créé');
//         }
//     })

// }

if (fs.existsSync('./monDossier/monfichier.txt')) {
    fs.unlink('./monDossier/monfichier.txt',
        (Error) => {
            if (Error) {
                console.log(Error);
            } else {
                console.log('Fichier supprimé');
            }
        }
    );
} else {
    fs.writeFile('./monDossier/monfichier.txt', 'Ce fichier a été écrit avec node',
        (Error) => {
            if (Error) {
                console.log(Error);
            } else {
                console.log("le fichier a été créé");
            }
        }
    );
    fs.readFile('./monDossier/monfichier.txt',
        (Error, Data) => {
            if (Error) {
                console.log(Error);
            } else {
                console.log(Data.toString());
            }
        }
    );
}