const url="https://api.github.com/users/Krishna-Kr-Yadav";
const res=fetch(url);
res.then((resp)=>{
    return resp.json();
}).then((data)=>{
    console.log("Data: ", data);
}).catch((error)=>{
    console.log("Error: ",error);
}).finally(()=>{
    console.log("fetch done successfully in finally");
})

//Create profile.html page and display the fetched data