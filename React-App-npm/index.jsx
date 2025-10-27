import ReactDOM from 'react-dom'
function Book({book}){
    return (
        <div className="card">
            <img src="" height="200" width="200" alt="book-image"/>
            <h3>Title: {book.title}</h3>
            <h4>Price: ₹{book.price}</h4>
            {/* alt + ctrl + 4 */}
            <button>Add to cart</button>
        </div>
    )
}
const books=[{image:"",title:"Math",price:785},{image:"",title:"Physics",price:900},{image:"",title:"Chemistry",price:375},];

function App(){
        return (
            <div>
                {books.map((b,i)=>(
                    <Book key={i} book={b}/>
        ))}
            </div>
        );
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App />);
