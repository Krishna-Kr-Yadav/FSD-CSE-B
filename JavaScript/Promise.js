// let pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hi");
//     },2000)
// });
// pr.then(()=>{
//     console.log("Promise fulfilled");
// }).catch(()=>{
//     console.log("Promise unfulfilled");
// }).finally(()=>{
//     console.log("finally");
// })

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Register End');
            resolve();
        },2000);
    })
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Email Send');
            resolve();
        },4000)
    })
}
function Login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Login Successfully');
            // resolve();
            reject('login failed');
        },3000);
    })
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Get Data End');
            resolve();
        },6000);
    })
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Data Displayed');
            resolve();
        },2000);
    })
}

// USING PROMISE
// register()
// .then(sendEmail)
// .then(Login)
// .then(getData)
// .then(displayData)
// .catch((error)=>{
//     console.log("Error: ", error);
// })

async function f1(){
    try{    
        await register();
        await sendEmail();
        await Login();
        await getData();
        await displayData();
    }
    catch(error){
        console.error("Error: ",error)
    }
}
f1();

console.log('Call other applications');