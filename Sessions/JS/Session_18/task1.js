class StringManipulator{
    constructor(text)
    {
        this.text = text
    }
    toUpperCase(){
        return String.prototype.toUpperCase.call(this.text);
    }
    isPalindrome(){
        let rev = this.text.split("").reverse().join("");
        if(rev === this.text){
            return true;
        }
        return false
    }
    reverse(){
        let rev = this.text.split("").reverse().join("");
        console.log(rev.toUpperCase())
    }
    countRepeatedChars(){
        var repeatedLetters = {}
        for(let str of this.text){
            repeatedLetters[str] = repeatedLetters.hasOwnProperty(str) ? repeatedLetters[str] + 1 : 1
        }
        console.log(repeatedLetters)
    }
    replaceLetters(letters)
    {
        var copyText = this.text;
        for(let  of array){
            if
        }
    }
}
const manipulator = new StringManipulator('Madam, in Eden, I’m Adam')
console.log(manipulator.toUpperCase())
console.log(manipulator.isPalindrome())
manipulator.reverse()
manipulator.countRepeatedChars()
manipulator.replaceLetters(["a","b"])
var text1 = "yes"
console.log(text1)