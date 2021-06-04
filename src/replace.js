import findAndReplaceDOMText from 'findandreplacedomtext';
import bullshitTerms from './terms';

function revealBullshit({text}) {
    const c = text.charAt(0);
    const last = text.length - 1;
    let bullshit = `${c === c.toUpperCase() ? 'B' : 'b'}ullshit`;

    if (text.substr(last - 2) === 'ing') {
        bullshit += 'ting';
    } else if (text.charAt(last - 1) !== 's' && text.charAt(last) === 's') {
        bullshit += 's';
    } else if (text.charAt(last - 2) !== 'e' && text.substr(last - 1) === 'ed') {
        bullshit += 'ted';
    } else if (text.charAt(last - 2) !== ('o' || 'e') && text.substr(last - 1) === ('or' || 'er')) {
        bullshit += 'ter';
    } else if (text.charAt(last - 3) !== ('o' || 'e') && text.substr(last - 2) === ('ors' || 'ers')) {
        bullshit += 'ters';
    }

    const abbr = document.createElement('abbr');
    abbr.style.color = 'red';
    abbr.title = text;
    abbr.innerHTML = bullshit;

    return abbr;
}

const bullshitRe = new RegExp(`\\b(${bullshitTerms.join('|')})\\b`, 'gi');

findAndReplaceDOMText(document.body, {
    find: bullshitRe,
    replace: revealBullshit,
    preset: 'prose'
});
