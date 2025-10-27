import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

function Book(){
    return(
        <div className='card'>
            <img src="https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180" height="300" width="400" alt="book-img"/>
            <h3>Title: Math</h3>
            <h4>Price: ₹400</h4>
            <button>Add to Cart</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className='container'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </div>
)