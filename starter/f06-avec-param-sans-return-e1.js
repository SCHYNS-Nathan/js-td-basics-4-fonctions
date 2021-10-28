/*****************************
* 020 - Fonctions - Préalable
*/

// 4. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE (SANS RETURN)

// 1°) Fonctions sans paramètre (pour comprendre l'utilité du paramètre) :

/* EXERCICE 1 : Plusieurs fonctions sans paramètre
1. a) Déclarer une fonction double3 qui affiche dasn la console 'Le double de 3 est '
   b) Appeler cette fonction
Imaginons à présent qu'on a besoin de calculer le double d'autres nombres 
On a besoin de déclarer une fonction pour calculer le double de 10 
et puis de déclarer une AUTRE fonction pour calculer le double de 24
et puis de déclarer une AUTRE fonction pour calculer le double de 128
etc. et ainsi de suite à chaque fois qu'on veut calculer le double d'un nouveau nombre
*/
function double3() {
    console.log(`Le double de 3 est ${3*2} !`);
}
double3();
function double10() {
    console.log(`Le double de 10 est ${10*2} !`);
}
double10();










/*
Si on regarde toutes ces fonctions, elles ont toutes un canevas commun,
il y a une seule chose qui change : le nombre (2, ou 10, ou 24). Tout le reste est identique.
Dans ce cas, vous devez pense à créer une seule fonction qui prend un paramètre :
le nombre dont on veut calculer le double
*/


// 2°) Une fonction avec paramètre à la place de toutes celles-là :

/* EXERCICE 2 : Une seule fonction avec paramètre
1. a) Déclarer une fonction double qui prend un paramètre nombre
      et qui affiche dans la console 'Le double de [ce paramètre] est '
   b) Appeler cette fonction en passant différentes valeurs au paramètre
      pour obtenir : - le double de 3 ;
                     - le double de 10 ;
                     - le double de 24 ;
                     - le double de 128
*/
function double(nombre) {
    console.log(`Le double de ${nombre} est ${nombre*2}`);
}
double(2);
double(10);
double(24);
double(128);






/* 
Le paramètre est à nouveau un MOYEN DE COMMUNCIATION  avec la fonction :
C'EST UN MOYEN DE FAIRE ENTRER UNE DONNEE DANS UNE FONCTION.
On peut voir le paramètre comme une variable locale,
et on donne une valeur à cette variable au moment de l'appel
(voir graphique)
*/

/* RÉSUMÉ :
1. Un PARAMÈTRE est une information dont une fonction a besoin pour jouer son rôle.

2. Dans la DÉCLARATION de la fonction, 
  - le NOM du paramètre est défini entre parenthèses juste après le nom de la fonction
  - on peut ensuite l'utiliser (comme si c'était une variable locale)
    en indiquant son nom à chaque fois qu'on en a besoin dans le corps de la fonction. 
 
 3. Au moment de l'APPEL de la fonction : 
  - on passe la VALEUR du paramètre entre les parentèses de l'appel de fonction.
  => La valeur d'un paramètre est fournie au moment de l'appel de la fonction :
     on dit que cette valeur est passée en paramètre.
     La valeur donnée à un paramètre lors de l'appel de fonction s'appelle l'ARGUMENT .
*/
