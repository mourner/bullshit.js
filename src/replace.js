function revealBullshit(term) {
    var c = term.charAt(0),
        bullshit = (c === c.toUpperCase() ? 'B' : 'b') + 'ullshit';

    if (term.substr(term.length - 3) === 'ing') {
        bullshit += 'ing';
    }
    var abbr = document.createElement("abbr");
    abbr.setAttribute("style", "color:red");
    abbr.title = term;
    abbr.innerHTML = bullshit;
    return abbr;
}

findAndReplaceDOMText(
        new RegExp('(' + bullshitTerms.join('|') + ')(?!\\w|[^<]*>)', 'gi'),
        document.body, revealBullshit);
