const url="https://dummyjson.com/users";

const fetchData=async()=>{
    try{
        const res=await fetch(url);
        const jsonData=await res.json();
        jsonData.users.forEach((data)=>{
            console.log("Name: ",data.firstName);
            console.log("Email: ",data.email);
            console.log("IP: ",data.ip);
            console.log("Mac: ",data.macAddress);
            console.log("#####################################");
        })
    }
    catch(err){
        console.error("Error: ",err.message);
    }
}

fetchData();