// ----------------------------- Get length of static methods--------------------------------
class Calc{
    static add(a,b){
        return a + b;
    }
    static multi(a,b,c){
        return a * b * c ;
    }
    test1() {
        console.log("test")
    }
}

stMethods = Object.getOwnPropertyNames(Calc) // For static methods 
stMethods2 = Object.getOwnPropertyNames(Calc.prototype)
const filterstMethod = stMethods.filter((prop) => typeof Calc[prop] === "function");
const filterstMethod2 = stMethods2.filter((prop) => typeof Calc.prototype[prop] === "function" && prop !== "constructor");

console.log(stMethods)
console.log(stMethods2)