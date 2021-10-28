/*****************************
* 020 - Fonctions - Préalable
*/

// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 2°) Variable globale 

/* 
Variable gobale = variable déclarée en dehors d'une fonction
Une variable globale est accessible de partout 
=> On peut voir une variable globale comme un
   2e MOYEN DE COMMUNCIATION entre les fonctions :
   VARIABLE GLOBALE = MOYEN DE PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
   (rendre une info disponible partout)
 */

/* EXERCICE 1 : Variable locale
1. Déclarer une fonction affiche1 qui
	- stocke a valeur 2 dans une variable nbre1
2. Déclarer une fonction affiche2 qui
	- stocke a valeur 3 dans une variable nbre2
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 = "  
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 = "
3. Appeler affiche2
4. Expliquer ce qui se passe
*/
function affiche1() {
    let nbr1 = 2;
}
function affiche2() {
    let nbr2 = 3;
    console.log(`nbr2 = ${nbr2}`);
    console.log(`nbr1 = ${nbr1}`);
}
affiche2();










/*
Une variable déclarée à l'intérieur d'une fonction est dite "locale"
et elle n'est disponible qu'à l'intérieur de cette fonction
*/

/* EXERCICE 2 : Variable globale
				(on sort la variable nbre1 de la fonction affiche1)
1. Initialiser une variable nbre1 à la valeur 2
2. Déclarer une fonction affiche1 qui
	- donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 = "
3. Déclarer une fonction affiche2 qui
	- stocke a valeur 3 dans une variable nbre2
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 = "  
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 = "
4. Appeler affiche1 et affiche2
5. Expliquer ce qui se passe
*/













/*
Pour qu'une variable soit disponible partout
(y compris à l'intérieur d'autres fonctions),
il faut la déclarer en dehors de toute fonction.
On dit alors que c'est une variable "globale"
*/


/* EXERCICE 3 : Variable globale - variante
				(on déclare la variable nbre1 hors de la fonction affiche1
				et on l'affecte à l'intérieur de la fonction affiche1)
1. Déclarer une variable nbre1 sans lui affecter de valeur
2. Déclarer une fonction affiche1 qui
	- stocke a valeur 2 dans une variable nbre1
	- donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 = "
3. Déclarer une fonction affiche2 qui
	- stocke a valeur 3 dans une variable nbre2
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 = "  
	- donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 = "
4. Appeler affiche1 et affiche2
5. Expliquer ce qui se passe
*/








/*
Pour qu'une variable ait une portée globale,
ce qui est important, c'est de la DÉCLARER en dehors de toute fonction,
on n'est pas obligé de l'affecter à cet endroit-là,
on peut l'affecter n'importe où, elle sera quand même globale,
c.-à-d. accessible partout
*/

/*
RESUME :
- Portée d'une variable = ensemble des endroits où elle est accessible
- Variable locale : accesssible que dans le corps de la fonction où elle se trouve
- Variable gloable : accessible partout
*/
