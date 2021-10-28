/*****************************
* 021 - Function Statements and Expressions
*/

/*
1. Déclarer, en utilisant une fonction expression,
la fonction whatDoYouDo qui prend deux paramètres, job et firstName.
Cette fonction retourne le prénom suivi d'une phrase qui décrit le job de la personne
pour différents cas de job :
    - si c'est teacher, "teaches kids how to code"
    - si c'est driver, "drives a cab in Lisbon"
    - si c'est designer, "designs beautiful websites"
    - dans tous les autres cas, "does something else"
2. Utiliser cette fonction pour afficher dasn la console ce que font 
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/
whatDoYouDo = (job, firstName) => {
    switch (job) {
        case "teacher" :
            console.log(`${firstName} teaches kid how to code.`);
            break;
        case "driver" :
            console.log(`${firstName} drives a cab in Lisbon.`);
            break;
        case "designer" :
            console.log(`${firstName} design beatiful websites.`);
            break;
        default :
            console.log(`${firstName} does something else.`);
    }
}
whatDoYouDo("teacher","John");
whatDoYouDo("designer","Jane");
whatDoYouDo("retired","Mark");