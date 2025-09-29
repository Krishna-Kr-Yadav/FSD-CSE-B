// const num=[10,20,30,40,50];
// const a=num[0];
// const b=num[1];
// const c=num[2];
// const d=num[3];
// const e=num[4];

//Array Destructuring
// const [a,b,c,d,e]=num;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// const obj={name:"abc",id:2,email:'abc@gmail.com'};
// const name=obj.name;
// const id=obj.id;
// const email=obj.email;

// const {name:newName,id,email}=obj;
// console.log(newName);
// console.log(id);
// console.log(email);

// rest -> to collect the data
// spread -> to spread the data

//rest
const num=[1,2,3,4,5,6,7];
const [f,s,...rest]=num;
console.log(f);
console.log(s);
console.log(rest);


