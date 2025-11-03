import React, { useEffect,useState } from 'react';
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const App=()=>{
  // const carts=[
  //   {image:"https://tse1.mm.bing.net/th/id/OIP.gw2y7zxSvdKQ8d6NCyo4OgHaGI?pid=Api&rs=1&c=1&qlt=95&w=129&h=106",title:"React",price:100},
  //   {image:"https://tse1.mm.bing.net/th/id/OIP.gw2y7zxSvdKQ8d6NCyo4OgHaGI?pid=Api&rs=1&c=1&qlt=95&w=129&h=106",title:"Java",price:200},
  //   {image:"https://tse1.mm.bing.net/th/id/OIP.gw2y7zxSvdKQ8d6NCyo4OgHaGI?pid=Api&rs=1&c=1&qlt=95&w=129&h=106",title:"Python",price:300}
  // ]
  const [carts,setCarts] = useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
      setCarts(data);
      // const fdata=data.filter(x=>x.category==="women's clothing")
      // setCarts(fdata);
    });
  },[])

  return(
    <>
      <Header />
      <div className='cartList'>
        {/* <Cart />
        <Cart />
        <Cart /> */}


        {
          carts.map((c,i)=>(
            <Cart key={i} cart={c} />
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default App;