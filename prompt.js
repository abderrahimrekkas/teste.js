const prompt = require('prompt-sync')();
function factoriel(n) {
    if (n === 0 || n === 1) {
        return 1; // Le factoriel de 0 ou 1 est 1
    } else {
        return n * factoriel(n - 1); // Appel récursif
    }
}
for (let i = 0; i < 1000; i++) {
<<<<<<< HEAD
    const operateur = prompt("Entrez un operateur (+, -, *, /, ^, >,!) : ");
=======
    const operateur = prompt("Entrez un operateur (+, -, *, /, ^, >) : ");
>>>>>>> e56e2765395a705fb82ec660eb50ae19adc029b3

        switch (operateur) {
            
            case '+':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                 bom=parseFloat(num1)+parseFloat(num2)
                 console.log(`resultat :${bom} `);
                break;
            case'-':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                 console.log(`resultat :${num1 - num2}`);
                 break;
            case '*':
                num1 = prompt("Entrez un nombre : ");
                num2 = prompt("Entrez un autre nombre : ");
                console.log(`resultat : ${num1 * num2}`);
                break;
            case '/':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                if (num2 === 0) {
                    console.log("Erreur wow ");
                } else {
                    console.log(`resultat : ${num1 / num2}`);
                }
                break;
        
            case '^':
<<<<<<< HEAD
                num1 = prompt("Entrez un nombre : ");
=======
                 num1 = prompt("Entrez un nombre : ");
>>>>>>> e56e2765395a705fb82ec660eb50ae19adc029b3
                num2 = prompt("Entrez un autre nombre : ");
                console.log(`resultat : ${Math.pow(num1, num2)}`);
                break;
        
            case '>':
                num1 = prompt("Entrez un nombre : ");
                if(num1 < 0){
                    console.log("Erreur");
                }else {
                    console.log(`resultat : ${Math.sqrt(num1)}`);
                }
                break;
<<<<<<< HEAD

            case '!': 
                 num1 = prompt("Entrez un nombre : ");
                 num1 = parseInt(num1);
                console.log(`Resultat : ${factoriel(num1)}`);
                break;
=======
>>>>>>> e56e2765395a705fb82ec660eb50ae19adc029b3
        
        default:
            console.log("Opérateur invalide !");
        }
}