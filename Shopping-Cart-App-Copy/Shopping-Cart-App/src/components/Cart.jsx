import React from 'react';
import {useState} from 'react';
import './Cart.css'
const Cart=({cart})=>{
    const [count,setCount]=useState(1);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        if(count==1){
            alert("No of items cannot be zero");
        }
        else setCount(count-1);
    }

    function addToCart(){
        alert(`${cart.title} added to Cart`);
    }
    return(
        <div className="cart">
            <img src={cart.image} height={200} width={200} alt='cart-image'/>
            <h3>Title:{cart.title} Book-name</h3>
            <h4>Price: ₹{cart.price}/-</h4>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button><br/>
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}
export default Cart;

