import React, { useState,useEffect } from 'react'
import Book from './components/Book'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
const App = () => {
  // const books=[
  //   {image:"",title:"React",price:567},
  //   {image:"",title:"Java",price:567},
  //   {image:"",title:"Python",price:567}
  // ]
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      const fdata=data.filter(i=>i.category==="electronics");
      setBooks(fdata);
    })
  },[])
  return (
    <>
    <Header/>
    <div className="bookList">
      {
        books.map((b,i)=>(
          <Book key={i} book={b}/>
        ))
      }
    </div>
    <Footer/>
    </>
  )
}

export default App
