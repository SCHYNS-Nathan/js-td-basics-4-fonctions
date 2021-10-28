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
