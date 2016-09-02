
while(true) {
    var number = prompt("Prompt a number between 0 and 999");
    if(!isNaN(number)) {
        if(number >= 0 && number <= 999){
            alert(getLetterNumber(number));
            break;
        }
    }
}

// Convert number into letter
function getLetterNumber(number){
    // Trivial
    if(number == 0){
        return 'zéro';
    }
    // Get number digits
    var hundreds = Math.floor(number / 100);
    var dozens = Math.floor((number % 100) / 10);
    var units = number % 10;
    // Build string
    var letters = "";
    // Hundreds
    letters += unitLetter(hundreds, true)
    if(hundreds > 0) {
        letters += "-cent";
    }
    // Transition
    if(hundreds > 0 && dozens > 0) {
        letters += "-";
    }
    // Dozens
    if(dozens > 0 && !(dozens == 7 || dozens == 9 || dozens == 1))
    {

        letters += dozenLetter(dozens);
        // Units with dozen
        if(units > 0)
        {
            letters += "-";
            letters += unitLetter(units, false);
        }
    } else if(dozens == 0) {
        // Units alone
        if(units > 0)
        {
            letters += unitLetter(units, false);
        }
    } else {
        // 10's, 70's and 90's
        letters += dozenAndUnitLetter(dozens, units);
    }
    // Result
    return letters;
}

function unitLetter(unit, isHundred){
    switch(unit){
        case 1:
            return isHundred? '':'un';
        case 2:
            return 'deux';
        case 3:
            return 'trois';
        case 4:
            return 'quatre';
        case 5:
            return 'cinq';
        case 6:
            return 'six';
        case 7:
            return 'sept';
        case 8:
            return 'huit';
        case 9:
            return 'neuf';
        default:
            return '';
    }
}

function dozenLetter(unit){
    switch(unit){
        case 1:
            return 'dix';
        case 2:
            return 'vingt';
        case 3:
            return 'trente';
        case 4:
            return 'quarante';
        case 5:
            return 'cinquante';
        case 6:
            return 'soixante';
        case 7:
            return 'soixante-dix';
        case 8:
            return 'quatre-vingt';
        case 9:
            return 'quatre-vingt-dix';
        default:
            return '';
    }
}

// TODO vingtaine

function dozenAndUnitLetter(dozen, unit){
    var letters = "";
    // Dozen
    if(dozen == 7){
        letters += "soixante";
    } else if(dozen == 9){
        letters += "quatre-vingt"
    }
    if(dozen != 1){
        letters += "-"
    }
    switch(unit){
        case 1:
            letters += dozen == 7 ? 'et-onze' : 'onze';
            break;
        case 2:
            letters += 'douze';
            break;
        case 3:
            letters += 'treize';
            break;
        case 4:
            letters += 'quatorze';
            break;
        case 5:
            letters += 'quinze';
            break;
        case 6:
            letters += 'seize';
            break;
        case 7:
            letters += 'dix-sept';
            break;
        case 8:
            letters += 'dix-huit';
            break;
        case 9:
            letters += 'dix-neuf';
            break;
        default:
            letters += 'dix';
    }
    return letters;
}
