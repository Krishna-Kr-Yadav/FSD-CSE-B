import Book from './Book'

// function App(){
//     return (
//         <div className='container'>
//             <Book image="https://tse2.mm.bing.net/th/id/OIP.C0gdVkwW-wUgvtPKzNFkrAHaJt?pid=Api&P=0&h=180" name="Java" price="200"/>
//             <Book image="https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180" name="React" price="500"/>
//             <Book image="https://tse2.mm.bing.net/th/id/OIP.1QXmRpVYG0NA-fsZYrIrLwAAAA?pid=Api&P=0&h=180" name="DBMS" price="600"/>
//         </div>
//     )
// }

function App(){
    const Books=[{image:"https://tse2.mm.bing.net/th/id/OIP.C0gdVkwW-wUgvtPKzNFkrAHaJt?pid=Api&P=0&h=180" ,name:"Java", price:"200"},
        {image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180" ,name:"React", price:"500"},
        {image:"https://tse2.mm.bing.net/th/id/OIP.1QXmRpVYG0NA-fsZYrIrLwAAAA?pid=Api&P=0&h=180" ,name:"DBMS", price:"600"}
    ]
    return(
        <div className='container'>
            {Books.map((b,i)=>(
                <Book key={i} book={b}/>
            ))}
        </div>
    )
}

export default App;