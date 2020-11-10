export const getProposals = (words, str, n=2) => 
    words
    .filter(({word})=>word.startsWith(str))
    .sort((a,b)=>b.priority-a.priority)
    .slice(0,n)
    .map(({word})=>word)