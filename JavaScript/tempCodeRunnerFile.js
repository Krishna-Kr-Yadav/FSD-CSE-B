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