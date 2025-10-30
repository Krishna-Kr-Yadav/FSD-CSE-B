import React from 'react'
import {useState} from 'react';
import '../App.css'

const Book = ({book}) => {
    const [count,setCount]=useState(0);
    function decrementCount(){
        let myCount=0;
        if(count>0){
            myCount=count-1;
            setCount(myCount);
        }
    }
    function incrementCount(){
        let myCount=0;
        myCount=count+1;
        setCount(myCount);
    }
    function handleButton(){
        alert("Book Added in cart successfully");
    }
  return (
    <div className='card'>
      <img src={book.image} width='200' height='200' alt='image'/>
      <h3>Title: {book.name}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
        <button onClick={handleButton}>Add To Cart</button>
    </div>
  )
}

export default Book
