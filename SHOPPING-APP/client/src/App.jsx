import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserDashboard from './Pages/UserDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard/>}>
            <Route path="/login" element={<h1>Login Page</h1>}/>
            <Route path="/register" element={<h1>Register Page</h1>}/>
            <Route path="/cart" element={<h1>View Cart</h1>}/>
            <Route path="/order" element={<h1>View Order</h1>}/>
            <Route path="*" element={<h1>404 Error Page</h1>} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
