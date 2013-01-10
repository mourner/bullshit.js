
function revealBullshit(term) {

    var c = term.charAt(0),
        bullshit = (c === c.toUpperCase() ? 'B' : 'b') + 'ullshit';

    if (term.substr(term.length - 3) === 'ing') {
        bullshit += 'ing';
    }

    var abbr = document.createElement("abbr");
    abbr.style.color = 'red';
    abbr.title = term;
    abbr.innerHTML = bullshit;

    return abbr;
}

var bullshitRe = new RegExp('(' + bullshitTerms.join('|') + ')(?!\\w|[^<]*>)', 'gi');

findAndReplaceDOMText(bullshitRe, document.body, revealBullshit);
