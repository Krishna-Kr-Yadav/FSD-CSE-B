import './App.css'
import Book from './Book.jsx'

// const App=()=>{
//     return (
//         <div className='bookList'>
//             <Book image="https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180" name="React" price="₹100"/>
//             <Book image="https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180" name="React" price="₹100"/>
//             <Book />
//             <Book />
//             <Book />
//             <Book />
//         </div>
//     )
// }
const App=()=>{
    const books=[{image:"https://tse1.mm.bing.net/th/id/OIP.g9UHblwHf4VFKhoT4c2UYAHaHa?pid=Api&P=0&h=180",title:"Math",price: 381},
        {image:"https://tse4.mm.bing.net/th/id/OIP.ZI2qc8SyU0tUS-LY5e65GgHaHa?pid=Api&P=0&h=180",title:"Chemistry", price: 400},
        {image:"https://tse1.mm.bing.net/th/id/OIP.-l00wrb6j72Wn3Jox29rjQHaHa?pid=Api&P=0&h=180",title:"Physics",price: 200}
    ]
    return (
        <div className='bookList'>
            {books.map((b,i)=>
                (
                    <Book key={i} book={b}/>
                )
            )}
        </div>
    )
}

export default App;
// const parent=document.getElementById("root");
// const root=ReactDOM.createRoot(parent);
// root.render(<Book/>)