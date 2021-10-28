/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min()n'existe pas,
	déclarez la fonction calcMin pour qu'elle retroune
	le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
	- le minimum entre 4.5 et 5
	- le minimum entre 19 et 9
	- le minimum entre 1 et 1
N.B. Faites deux versions :
	- en utilisant la syntaxe classique
	- en utilisant une arrow function
*/

// syntaxe classique
function calcMin(nbr1, nbr2) {
    if (nbr1 >= nbr2) {
        console.log(nbr2)
        return(nbr2);
    }
    else {
        console.log(nbr1)
        return(nbr1)
    }
}
calcMin(4.5,5);

// arrow function
calcMin2 = (nbr1,nbr2) => {
    if (nbr1 >= nbr2) {
        console.log(nbr2)
        return(nbr2);
    }
    else {
        console.log(nbr1)
        return(nbr1)
    }
}
calcMin2(4.5, 5);

// arrow function écriture encore plus concise
