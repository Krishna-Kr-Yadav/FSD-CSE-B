// import ReactDOM from 'react-dom/client'
import './App.css'

function Book({image,name,price}){
    return(
        <div className="card">
            <img src={image} width="200" height="200" alt="book-img"/>
            <h3>Title: {name}</h3>
            <h4>Price: {price}</h4>
            <button>ADD TO CART</button>
        </div>
    );
}


// function Book({book}){
//     return(
//         <div className="card">
//             <img src={book.image} width="200" height="200" alt="book-img"/>
//             <h3>Title: {book.name}</h3>
//             <h4>Price: {book.price}</h4>
//             <button>ADD TO CART</button>
//         </div>
//     );
// }



export default Book;