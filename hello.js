// console.log("Aaqib")
// console.log(typeof('Aaqib'))
// console.log(typeof("24"))
// console.log(typeof(24))
// console.log(typeof(true))
// console.log(typeof(null))
// console.log(typeof(undefined))
// let x
// console.log(typeof(x))

// let x = "hello"
// var y = "hello"
// const z = 24

// const a=10;
// const b=18;
// if(a>b)
// {
//     console.log("a is greater")
// }else{
//     console.log("b is greater")
// }

// const n=10;
// for (let i=0;i<n;i++)
// {
//     console.log(i);
// };

// try{
//     throw new Error("hello coder");
// }
// catch(err){
//     console.log(err);
// }

// function square(x){
//     return x*x
// }
// console.log(
//     square(22)
// )

//npm init =>pakage.json
//npm i cowsay

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
