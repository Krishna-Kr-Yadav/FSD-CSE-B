React Routing-> npm i react-router-dom

react-router-dom like react and react-dom

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<h1>Home Page </h1> }/>
                    <Route path='/' element={<h1>Login Page </h1> }/>
                    <Route path='/' element={<h1>Error Page</h1> }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


// npm create vite@latest client

Target Audience
- Faculty
- Student
- Hod
- Dean
- Director

mainly 1. user 2. admin


//user layout
Header
Home ViewCart Order Logout
Shoplist
Footer

//admin layout
Header
User Logot Home
userLIst
Footer

npmjs.com se sari dependencies laa raha hai
we can also register our own dependencies

^ abd  ~ use in dependencies

