# smalltasks

file "countSpecialChars.mjs" contains function to count special characters in java files

usage example:
```js
import {countSpecials} from './countSpecialChars.mjs'

let counts = countSpecials([javaFileContent1, javaFileContent2])
console.log(counts)
```

file "getProposals.mjs" contains function, that from given words array and first few letters of word produces several possible continuation

usage example:
```js
import {getProposals} from './getProposals.mjs'

let words = [
    {word: "arctan", priority: 4},
    {word: "hello", priority: 10},
    {word: "hills", priority: 5},
    {word: "array", priority: 1},
    {word: "arrow", priority: 2},
]

let proposals = getProposals(words, 'ar')
console.log(proposals)
```

to test run:
```shell
yarn test
```