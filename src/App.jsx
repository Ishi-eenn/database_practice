import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Cleate from './components/create'
import Header from './components/header'
import Test from './components/test'
import { useState, createContext } from 'react'

export const BookDataContext = createContext()

function App() {
  const [bookData, setBookData] = useState([])
  return (
    <BookDataContext.Provider value={[ bookData, setBookData ]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Cleate />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </BookDataContext.Provider>
  )
}

export default App
