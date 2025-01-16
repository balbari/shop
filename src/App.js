import React, { use, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductDetail from './Page/ProductDetail'
import ProductAll from './Page/ProductAll'
import Login from './Page/Login'
import Header from './component/Header'
import PrivateRoute from './Route/PrivateRoute'



function App() {
    const [loginok, setLoginok] = useState(false);
    
    useEffect(()=>{
        console.log(loginok)
    },[loginok]);

    return (
        <div>
            <Header loginok={loginok}></Header>
            <Routes>
                <Route path='/' element={<ProductAll />}></Route>
                <Route path='/login' element={<Login setLoginok={setLoginok}/>}></Route>
                <Route path='/products/:id' element={<PrivateRoute loginok={loginok}/>}></Route>
            </Routes>
        </div>
    )
}

export default App
