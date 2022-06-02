const sentence = ' Honesty and diligence should be your eternal mates. The proverb of Franklin. ';

const pipe = (...funcs) => (x) => funcs.reduce((v, f) => f(v), x);

const trimStr = (str) => str.trim();
const splitStr = (str) => str.split(' ');
const rmArticle = (arr) => arr.filter((w) => !['A', 'AN', 'THE'].includes(w.toUpperCase()));
const nrArr = (arr) => arr.length;

// const count = nrArr(rmArticle(splitStr(trimStr(sentence))));
// console.log(count);

const countWords = pipe(trimStr, splitStr, rmArticle, nrArr);
const count = countWords(sentence);
console.log(count);
