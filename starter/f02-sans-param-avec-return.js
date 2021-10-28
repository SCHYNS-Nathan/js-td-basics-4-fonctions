 /*****************************
* 020 - Fonctions - Préalable
*/

// 2. FONCTION SANS PARAMÈTRE MAIS AVEC UN RETURN  

/* RAPPELS :
	1. Déclarer la fonction
	2. Exécuter la fonction
	3. Valeur de retour de la fonction
*/
/*
DÉCLARER la fonction = CRÉER la fonction :
On crée un conteneur qui a un identifiant (le nom de la fonction)
et on y stocke le mode d'emploi (le corps de la fonction, la liste d'instructions qui sont entre les accolades) 
!! Cette fois, on ajoute à la fin du bloc de déclaration l'instruction RETURN suivie de la valeur de retour (c.-à-d. la valeur que la fonction devra retourner lorqu'on l'exécutera)
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
   UNE FONCTION QUI A UNE INSTRUCTION RETURN RETOURNE LA VALEUR DE RETOUR
   (= valeur de l'expression qui se trouve après le return) 
   => son appel s'évalue à la valeur de retour
*/

/* 
EXERCICE : 
1°) a) Déclarer la fonction direBonjour qui retroune la châine de caractères "Bonjour !"
    b) Lancer ce programme dans un navigateur que se passe-t-il ? Expliquer
2°) a) Exécuter la fonction direBonjour (écrire l'appel de fonction direct)
    b) Lancer ce programme complété dans un navigateur que se passe-t-il ? Expliquer
3.°) a) Stocker le résultat de l'exécution de direBonjour dans une variable resultat
    b) Donner l'ordre d'afficher la contenu de la variable résultat dans la console
    c) Lancer ce programme complété dans un navigateur expliquer
*/

 function direBonjour() {
     console.log("Bonjour !");
     return;
 }
 let resultat = direBonjour();
 console.log(resultat);


