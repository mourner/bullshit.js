import findAndReplaceDOMText from 'findandreplacedomtext';
import bullshitTerms from './terms';

function revealBullshit(term) {

    const c = term.charAt(0);
    const last = term.length - 1;
    let bullshit = `(${c === c.toUpperCase() ? 'B' : 'b'}ullshit`;

    if (term.substr(last - 2) === 'ing') {
        bullshit += 'ting';
    } else if (term.charAt(last - 1) !== 's' && term.charAt(last) === 's') {
        bullshit += 's';
    } else if (term.charAt(last - 2) !== 'e' && term.substr(last - 1) === 'ed') {
        bullshit += 'ted';
    } else if (term.charAt(last - 2) !== ('o' || 'e') && term.substr(last - 1) === ('or' || 'er')) {
        bullshit += 'ter';
    }

    const abbr = document.createElement('abbr');
    abbr.style.color = 'red';
    abbr.title = term;
    abbr.innerHTML = bullshit;

    return abbr;
}

const bullshitRe = new RegExp(`(${bullshitTerms.join('|')})(?!\\w|[^<]*>)`, 'gi');

findAndReplaceDOMText(bullshitRe, document.body, revealBullshit);
