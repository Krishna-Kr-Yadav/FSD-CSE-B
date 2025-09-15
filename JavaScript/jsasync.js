function register(cb){
    setTimeout(()=>{
        console.log('Register End');
        cb();
    },2000);
}
function sendEmail(cb){
    setTimeout(()=>{
        console.log('Email Send');
        cb();
    },2000)
}
function Login(cb){
    setTimeout(()=>{
        console.log('Login Successfully');
        cb();
    },2000);
}
function getData(cb){
    setTimeout(()=>{
        console.log('Get Data End');
        cb();
    },2000);
}
function displayData(){
    setTimeout(()=>{
        console.log('Data Displayed');
    },2000);
}

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
// console.log("call other applications");