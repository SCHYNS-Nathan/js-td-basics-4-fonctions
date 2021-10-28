/*****************************
* 020 - Fonctions - Préalable
*/

// 4. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE (SANS RETURN)

// Une fonction avec plusieurs paramètres

/* EXERCICE :
1. Déclarer une fonction presenter
  - qui prend deux paramètres, prenom et age
  - et qui affiche dans la console "Tu t'appelles  et tu as  ans"
2. Appeler cette fonction en lui passant comme paramètre
  a) "Garance" et 10
  b) 6 et "Prosper"
*/

// déclaration de la fonction

function presenter(prenom, age) {
    console.log(`Tu es ${prenom} et tu as ${age} ans.`);
}
presenter("Garance", 10);
presenter(6, "Prosper");


// appels de fonction avec passage de paramètres





/* ATTENTION !
	Lors d'un appel à une fonction acceptant plusieurs paramètres,
	le nombre et l'ordre des paramètres doivent être respectés.
*/
