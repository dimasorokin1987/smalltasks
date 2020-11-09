export const specials = {
    comma: ',',
    dot: '.',
    colon: ':',
    semicolon: ';',
    singleQuote: '\'',
    doubleQuote: '"',
    backQuote: '`',
    openingBracket: '(',
    closingBracket: ')',
    openingBraces: '{',
    closingBraces: '}',
    openingSquareBracket: '[',
    closingSquareBracket: ']',
    lessThanSign: '<',
    greaterThanSign: '>',
    minus: '-',
    plus: '+',
    multiply: '*',
    equalSign: '=',
    and: '&',
    pipe: '|',
    exclamationMark: '!',
    questionMark: '?',
    slash: '/',
    backSlash: '\\',
    atSign: '@',
    octotorp: '#',
    dollarSign: '$',
    percentSign: '%',
    hatSign: '^',
    tildas: '~',
    underscore: '_'
}

export const countSpecials = strArr => {
    let res = {}
    Object.keys(specials).forEach(k=>res[k]=0);

    for(let str of strArr) {
        for(let ch of str) {
            Object.entries(specials)
            .forEach(([k,v])=>{
                if(ch == v) res[k]++;
            })
        }
    }
    return res
}