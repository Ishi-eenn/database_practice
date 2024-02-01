import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Cleate from './components/create'
import Header from './components/header'
import Search from './components/Search'
import Login from './components/Login'
import { useState, createContext } from 'react'

export const BookDataContext = createContext()

function App() {
  const [bookData, setBookData] = useState([])
  return (
    <BookDataContext.Provider value={[ bookData, setBookData ]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/create' element={<Cleate />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </BookDataContext.Provider>
  )
}

export default App
