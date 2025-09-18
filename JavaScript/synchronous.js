function waitForTwoSeconds(){
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}

function register(){
    waitForTwoSeconds();
    console.log("Register End");
}

function sendEmail(){
    waitForTwoSeconds();
    console.log("Send Email");
}

function Login(){
    waitForTwoSeconds();
    console.log("Login");
}

function getData(){
    waitForTwoSeconds();
    console.log("Get Data");
}

function displayData(){
    waitForTwoSeconds();
    console.log("Display Data");
}


register();
sendEmail();
Login();
getData();
displayData();
console.log("Other Application");