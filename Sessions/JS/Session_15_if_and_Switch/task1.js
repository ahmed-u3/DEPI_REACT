// Problem 1
let temp = 18;
if (temp < 10){
    console.log("Cold");
}
else if (temp <= 25){
    console.log("Mild");
}
else{
    console.log("Hot");
}


// Problem 2
let age = 16;
switch (true) {
    case (0 < age && age <= 16): console.log("Child"); break; 
    case (age < 21) : console.log("Teenager"); break;
    case (age < 35): console.log("Young Man"); break;
    case (age < 55): console.log("Adult"); break;
    case (55 < age): console.log("Old"); break;
    default:
        console.log("This is not an age")
        break;
}

//Problem 3
let score = 95 ;

switch(true){
    case (score>=60): console.log(`Your score is ${score}. You have past the exam`);
    break;
    default:
        console.log(`Your score is ${score}. You didn't past the exam`);
        break;
}

//Problem 4
let yourCar = "BMW";
if(yourCar.toUpperCase()==="BMW"){
    console.log("Congrats you have BMW");
}
else{
    console.log(`your car is ${yourCar}, but BMW is the best`)
}


// function sumandPrint(a,b,c,callback){
//     let res = a + b + c ;
//     callback(res);
// }
// sumandPrint(10,20,30,(sum)=> console.log(sum));

// Problem 5
let numArr = [1,2,3,4,5,6,7,8,9,10];
function isEven(numArr , callback){
    let isevenarr = [];
    for(num of numArr){
        if (num%2 == 0){
            isevenarr.push(num);
        }
    }
    callback(isevenarr);
}
isEven(numArr , (result)=> console.log(result)) ;

//Problem 6
const products = [
    ["product1",150],
    ["product2",250],
    ["product3",350],
    ["product4",450]
];

const getproduct = products.filter(([products,value])=> value >=350);
console.log(getproduct);

//problem 7
const numArr2 = [1,1,1,2,3,4,2,3,5,5,4,7,8,9,10,10];
const assendingarr = numArr2.sort((a,b)=> a-b);
const unique = assendingarr.filter((number,index)=> assendingarr.indexOf(number)===index);
console.log(unique);

//Problem 8
const teamsSkills = [
    ["html" , "css", "js" , "node"],
    ["html" , "css", "js"],
    ["html" , "php", "js"],
    [ "js" , ".net"]
]
const backend = ["php","node",".net"];

const includesAll = (arr,value) => value.every(v=> arr.includesAll(v));
includesAll(teamsSkills, backend);