import findAndReplaceDOMText from 'findandreplacedomtext';
import bullshitTerms from './terms';
import {bullshitWord} from './word';

function revealBullshit({text}) {
    const bullshit = bullshitWord(text);

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
