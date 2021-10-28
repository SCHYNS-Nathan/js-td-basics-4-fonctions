/*****************************
* 020 - Fonctions - Préalable
*/

// 4. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE (SANS RETURN)

/* RAPPEL :
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

/* EXERCICE :
1. Déclarer une fonction direBonjour
   - qui prend comme paramètre le prenom
   - qui doit faire plusieurs affichages successifs dans la console :
      - "Bonjour  !"
      - "Hello  !"
      - "Comment vas-tu  ?"
      - "Hey, salut  !"
      - "Buenos dias  !"
2. Appeler cette fonction en lui passant comme paramètre
   a) "Baptiste"
   b) "Sophie"
*/

// 1°) Déclaration de la fonction avec paramètre

function direBonjour(prénom) {
    console.log(`Bonjour ${prénom} !`);
    console.log(`Hello ${prénom} !`);
    console.log(`Comment vas-tu ${prénom} ?`);
    console.log(`Hey ${prénom} !`);
    console.log(`Bonjourno ${prénom} !`);
}
direBonjour("Sophie");
direBonjour("Baptiste");




/*
Au moment de la DÉCALARATION de la fonction, on définit le paramètre
dans les parenthèses juste après le nom de la fonction en lui donnant un NOM,
puis on l'utilise dans le corps de la fonction
*/

// 2°) Appel de la fonction avec paramètre




/* 
Au moment de l'APPEL de la fonction, on donne une VALEUR au paramètre
*/
