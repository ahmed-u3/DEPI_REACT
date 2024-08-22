function isPalindrome(word){
    word = word.toLowerCase();
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}
let word1 = "racecar";
let word2 = "racecars";
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));