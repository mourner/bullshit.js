import findAndReplaceDOMText from 'findandreplacedomtext';
import bullshitTerms from './terms';

function revealBullshit(term) {

    var c = term.charAt(0),
        bullshit = (c === c.toUpperCase() ? 'B' : 'b') + 'ullshit',
        last = term.length - 1;

    if (term.substr(last - 2) === 'ing') {
        bullshit += 'ting';
    }
    if (term.charAt(last - 1) !== 's' && term.charAt(last) === 's') {
        bullshit += 's';
    }
    if (term.charAt(last - 2) !== 'e' && term.substr(last - 1) === 'ed') {
        bullshit += 'ted';
    }
    if (term.charAt(last - 2) !== ('o' || 'e') && term.substr(last - 1) === ('or' || 'er')) {
        bullshit += 'ter';
    }

    var abbr = document.createElement("abbr");
    abbr.style.color = 'red';
    abbr.title = term;
    abbr.innerHTML = bullshit;

    return abbr;
}

var bullshitRe = new RegExp('(' + bullshitTerms.join('|') + ')(?!\\w|[^<]*>)', 'gi');

findAndReplaceDOMText(bullshitRe, document.body, revealBullshit);
