var npm = require('npm');

var words = ['dog', 'person', 'moose', 'ox', 'wife', 'guest', 'man', 'woman', 'mess', 'photo', 'avocado', 'superhero', 'bar', 'monkey', 'combo', 'toy', 'chair', 'toe'];

function getPluralization(word) {
    // This needs to be replaced with the code that returns a pluralized version of the input word
    var pluralizedWord = ['dogs', 'people', 'mooses', 'oxen', 'greedy', 'guests', 'men', 'women', 'messes', 'photos', 'avocados', 'superheroes', 'bars', 'monkies', 'combos', 'toys', 'chairs', 'toes'];
    
    for (var i = 0; i < words.length; i++ ) {
        if (words[i] === word) {
            word = pluralizedWord[i];
        }
    }
    
    return word;
}

function printPluralizedWord(word) {
    console.log(`The plural of ${word} is ${getPluralization(word)}`);
}

words.forEach(printPluralizedWord);
