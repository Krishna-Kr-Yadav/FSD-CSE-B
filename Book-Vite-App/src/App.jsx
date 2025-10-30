import React from 'react'
import Book from './component/Book'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  const data=[
    {image:"https://tse2.mm.bing.net/th/id/OIP.Lo6PQnj7UA2E2MQwiZ5mIwHaJJ?pid=Api&P=0&h=180",title:"React",price:453},
    {image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180",title:"DBMS",price:453},
    {image:"https://tse2.mm.bing.net/th/id/OIP.RM5JkPJFCnEs3bCJnjK7dwAAAA?pid=Api&P=0&h=180",title:"Java",price:500}];
  return (
    <>
      <Header />
      <div className='bookList'>
        {
          //html me javascript code
          data.map((b,i)=>(
            <Book key={i} book={b}/>
          ))
        }
      </div>
      <Footer/>
    </>
  )
}

export default App
