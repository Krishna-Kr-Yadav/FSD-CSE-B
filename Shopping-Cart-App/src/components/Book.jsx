import React from 'react'
import {useState} from 'react'
import './Book.css'


function Book({book}) {
    const [count,setCount]=useState(1);
    // let count=0;
    function increment(){
        setCount(count+1);
        // count=count+1;
        // console.log("count:"+count);
    }
    function decrement(){
        setCount(count-1);
        // count=count-1;
        // console.log("count:"+count);
    }
    function addtocart(){
        alert(`successfully added ${book.title}`)
    }
  return (
    <div className='card'>
      <img src={book.image} widht={200} height={200} alt="image"/>
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
        <button onClick={decrement} style={{width:"20px"}}>-</button>
        <span>{count}</span>
        <button onClick={increment} style={{widht:"20px"}}>+</button>
      </div>
      <button onClick={addtocart}>Add To Cart</button>
    </div>
  )
}

export default Book
