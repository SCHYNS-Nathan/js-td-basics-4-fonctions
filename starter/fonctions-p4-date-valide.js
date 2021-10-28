/*
FONCTIONS - PRÉPA 4 :  Date valide - version 2
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
- Déclarez deux fonctions : 
	- isBissextile retourne true ou flase selon que l'année est bissextile ou pas
	- isValid retroune true ou flase selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
	avant d'afficher votre message dans la console
*/
let isBis = false;
let isVal = false;

function isBissextile (year) {
    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0) ) {
        isBis = true;
        return(isBis);
    }
}
function isValid (day,month,year) {
    if (month === 2) {
        if (isBis === true && day <= 29 && day > 0) {
            isVal = true;
            return(isVal);
        }
        else if (isBis === false && day <= 28 && day > 0) {
            isVal = true;
            return(isVal);
        }
        else {
            isVal = false;
            return(isVal);
        }
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day <= 30 && day > 0) {
            isVal = true;
            return(isVal);
        }
        else {
            isVal = false;
            return(isVal);
        }
    }
    else if (month === 1 || month === 3 || month === 5 || month === 7 ||month === 8 || month === 10 || month === 12) {
        if (day <= 31 && day > 0) {
            isVal = true;
            return(isVal);
        }
        else {
            isVal = false;
            return(isVal);
        }
    }
    else {
        isVal = false;
        return(isVal);
    }
}
console.log(isBissextile(2020));
console.log(isValid(30,2,2020));

if (isVal === true) {
    console.log(`La date est valide !`);
}
else if (isVal === false) {
    console.log(`La date n'est pas valide !`);
}

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/
/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	- traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	- puis traiter les cas où ce sera 30 ;
	- dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour
 	pour retourner true ou fasle selon que la date est valide ou pas.
*/


