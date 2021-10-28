/*****************************
* 020 - Fonctions - Préalable
*/

// 5. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMETRE ET AVEC RETURN

/* EXERCICE :
1. Déclarer une fonction direBonjour qui
   - prend comme paramètre le prenom
   - déclare une variable message contenant "Bonjour  !"
   - retroune cette variable message 
2. Afficher dans la console bonjour à
   a) "Baptiste"
   b) "Sophie"
*/
function direBonjour(prenom) {
    let message = `Bonjour ${prenom} !`;
    console.log(message);
    return(message);
}
direBonjour("Baptiste");
direBonjour("Sophie");







// RETURN, PORTÉE DE VARAIBLE, PARAMÈTRE - RÉSUMÉ GLOBAL :
/* 
Le RETURN, la VARIABLE GLOBALE et le PARAMÈTRE sont
les trois MOYENS DE COMMUNICATION dune fonction avec le reste du code : 
  - L'instruction RETURN pour FAIRE SORTIR UNE DONNEE DUNE FONCTION
  - La VARIABLE GLOBALE pour PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
	  (rendre une info disponible partout)
  - Le PASSAGE DE PARAMETRE pour FAIRE ENTRER UNE DONNÉE DANS UNE FONCTION
*/
