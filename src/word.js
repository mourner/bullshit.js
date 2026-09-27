export function bullshitWord(text) {
    const c = text.charAt(0);
    const last = text.length - 1;
    let bullshit = `${c === c.toUpperCase() ? 'B' : 'b'}ullshit`;

    const ends = suffix => text.substr(last - suffix.length + 1) === suffix;

    // ('or' || 'er') is always 'or'. The s check also ran before ors/ers.
    if (ends('ing')) {
        bullshit += 'ting';
    } else if ((ends('ors') || ends('ers')) && text.charAt(last - 3) !== 'o' && text.charAt(last - 3) !== 'e') {
        bullshit += 'ters';
    } else if ((ends('or') || ends('er')) && text.charAt(last - 2) !== 'o' && text.charAt(last - 2) !== 'e') {
        bullshit += 'ter';
    } else if (text.charAt(last - 2) !== 'e' && ends('ed')) {
        bullshit += 'ted';
    } else if (text.charAt(last - 1) !== 's' && text.charAt(last) === 's') {
        bullshit += 's';
    }

    return bullshit;
}
