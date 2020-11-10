import {getProposals} from './getProposals.mjs'

const isArrEquals = (a,b)=>
    a.toString() === b.toString()


let words = [
    {word: "arctan", priority: 4},
    {word: "hello", priority: 10},
    {word: "hills", priority: 5},
    {word: "array", priority: 1},
    {word: "arrow", priority: 2},
]

console.log(
    'getProposals for given words array and word beginning should return correct values',
    isArrEquals(getProposals(words, 'ar', 2), ['arctan','arrow']),
    isArrEquals(getProposals(words, 'arr', 2), ['arrow','array']),
    isArrEquals(getProposals(words, '', 2), ['hello','hills']),
)

console.log(
    'getProposals for given words array and word beginning should return correct number of values',
    isArrEquals(getProposals(words, '', 2), ['hello','hills']),
    isArrEquals(getProposals(words, '', 1), ['hello'])
)

console.log(
    'getProposals for given words array, empty string and 1 should return word with highest priority',
    isArrEquals(getProposals(words, '', 1), ['hello'])
)