import './Book.css'
function Book({image,name,price}){
    return(
        <div className='card'>
            <img src={image} height="300" width="400" alt="book-img"/>
            <h3>Title: {name}</h3>
            <h4>Price: ₹{price}</h4>
            <button>Add to Cart</button>
        </div>
    )
}

export default Book;