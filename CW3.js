//Write a function that takes a string and returns an total representing the character count
// for each letter of each string in the sentence.
// Use .reduce to build this object. Hint: See .split()`` and stringlength``` property.

var str = "This is a sentence";

var words = str.split('');

console.log(words);

function getSum(total,letter)
{
    return total + letter
}
let total = words.reduce(getSum);

console.log(total);


