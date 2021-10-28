/*****************************
* 020 - Fonctions - Préalable
*/

// 1. FONCTION SANS PARAMÈTRE ET SANS RETURN 

/* RAPPELS :
	1. Déclarer la fonction
	2. Exécuter la fonction
	3. Valeur de retour de la fonction
*/
/*
DÉCLARER la fonction = CRÉER la fonction :
On crée un conteneur qui a un identifiant (le nom de la fonction)
et on y stocke le mode d'emploi (le corps de la fonction, la liste d'instructions qui sont entre les accolades) 
=> C'est comme quand on initialise une variable :
	- déclarer une variable = créer un conteneur qui porte un nom pour y stocker une valeur
	- déclarer une fonction = créer un conteneur qui porte un nom et y stocker un mode d'emploi
N.B. La déclaration, à elle toute seule, ne produit aucun résultat visible
	(on a juste enregistré quelque chose dans la mémoire de l'ordinateur,
	on a préparé le terrain : on a défini un mode d'emploi pour pouvoir travailler avec plus tard,
	on a expliqué comment faire quelque chose mais on n'a pas enocre donné l'ordre de le faire)
*/
/*
EXÉCUTER la fonction = utiliser la fonction 
					= faire un appel de fonction de direct
Comment ? avec l'opérateur ()
*/
/*
VALEUR DE RETOUR de la fonction :
Un appel de fonction direct est une expression
opérande OPÉRATEUR, par exemple : direBonjour() 
=> Cette expression s'évalue à une valeur quelle valeur ?
   UNE FONCTION QUI N'A PAS D'INSTRUCTION RETURN RETOURNE UNDEFINED
   => son appel s'évalue à UNDEFINED
*/

/* 
EXERCICE : 
1°) a) Déclarer la fonction direBonjour qui affiche "Bonjour !" dans la console
    b) Lancer ce programme dans un navigateur que se passe-t-il ? Expliquer
2°) a) Exécuter la fonction direBonjour (écrire l'appel de fonction direct)
    b) Lancer ce programme complété dans un navigateur que se passe-t-il ? Expliquer
3°) a) Stocker le résultat de l'exécution de direBonjour dans une variable resultat
    b) Donner l'ordre d'afficher la contenu de la variable résultat dans la console
    c) Lancer ce programme complété dans un navigateur expliquer
*/

// 1°) Déclarer la fonction
function direBonjour() {
    console.log("Bonjour !");
}



// 2°) Exécuter la fonction
direBonjour();



// 3°) Valeur de retour de cette fonction



