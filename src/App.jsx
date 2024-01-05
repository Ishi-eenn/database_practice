import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import CleatePost from './components/createPost'
import Login from './components/login'
import Logout from './components/logout'
import Header from './components/header'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CleatePost />}></Route>
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
