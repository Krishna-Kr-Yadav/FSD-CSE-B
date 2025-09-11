// const add=(a,b)=> a+b;

// function sum(a,b){
//     console.log("Before return: ");
//     return a+b;
// }
// console.log(add(10,20));

// //Immedidately invoked function expression
// (function(){
//     console.log("Inside IIFE");
// })();

// //callback function
// function callmeback(user,login){
//     console.log(`Hello ${user}`);
//     login();
// }
// function login(){
//     console.log("login confirmed");
// }

// callmeback("Krishna",login);



// function waitForTwoSeconds(){
//     const ms=new Date().getTime()+2000;
//     while(new Date().getTime()<ms);
// }

// function register(){
//     waitForTwoSeconds();
//     console.log("Register End");
// }

// function sendEmail(){
//     waitForTwoSeconds();
//     console.log("Send Email");
// }

// function Login(){
//     waitForTwoSeconds();
//     console.log("Login");
// }

// function getData(){
//     waitForTwoSeconds();
//     console.log("Get Data");
// }

// function displayData(){
//     waitForTwoSeconds();
//     console.log("Display Data");
// }

function register(cb){
    setTimeout(()=>{
        console.log("Register End");
        cb();
    },2000);
}

function sendEmail(cb){
    setTimeout(()=>{
        console.log("send Email");
        cb();
    },2000);
}

function Login(cb){
    setTimeout(()=>{
        console.log("Login");
        cb();
    },2000);
}

function getData(cb){
    setTimeout(()=>{
        console.log("Get Data");
        cb();
    },2000);
}

function displayData(){
    setTimeout(()=>{
        console.log("send Email");
    },2000);
}
//Callback Hell
register(()=>{
    sendEmail(()=>{
        Login(()=>{
            getData(()=>{
                displayData();
            })
        })
    })
})

// register();
// sendEmail();
// Login();
// getData();
// displayData();
console.log("Other Application");