function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Register End");
        },2000);
        resolve();
    })
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("sendEmail End");
        },3000);
        resolve();   
    })
}
function Login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login End");
        },4000);
        // resolve();
        reject("Login Failed");
    })
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("getData End");
        },5000);
        resolve();
    })
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("displayData End");
        },2000);
        resolve();
    })
}


async function f1(){
    try{
        await register();
        await sendEmail();
        await Login();
        await getData();
        await displayData();
    }
    catch(error){
        console.error("Error: ", error);
    }
}
f1();

console.log("Call other applications");