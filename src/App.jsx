import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Cleate from './components/create'
import Header from './components/header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Cleate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
