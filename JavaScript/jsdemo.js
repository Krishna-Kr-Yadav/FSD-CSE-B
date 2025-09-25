import {add,mul} from '../JavaScript/jsdemo1.js'
// import add from '../JavaScript/jsdemo1.js'

console.log("Sum: ",add(32,35));
console.log("Mul: ",mul(3,2));

const num=[1,2,3,4,5,6,7,8,9];
const even=num.filter((n)=>{
    return n%2===0;
}).map((n)=>(n*n)).reduce((n,count)=>{
    // return n*count;
    return n+count;
},0);
console.log(even);