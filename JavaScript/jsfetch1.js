// const url="https://dummyjson.com/users?limit=1";
const url="https://dummyjson.com/users"
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
}).then((data)=>{
    // console.log("Name: ",data.users[0].firstName);
    // console.log("Email: ",data.users[0].email);
    // console.log("IP Address: ",data.users[0].ip);
    // console.log("MAC Address: ",data.users[0].macAddress);
    data.users.forEach((da)=>{
        console.log("Name: ",da.firstName);
        console.log("Email: ",da.email);
        console.log("IP: ",da.ip);
        console.log("Mac: ",da.macAddress);
    })
    // console.log(data)
})
.catch((err)=>{
    console.error("Error: ",err.message);
})