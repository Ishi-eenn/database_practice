import { useState, useEffect, useContext } from 'react'
import './home.css'
import { getToDoLists } from '../api.js';
import PrintCardList from './printCardList.jsx';
import { BookDataContext } from '../App.jsx';

function Home() {
  const [bookData, setBookData] = useContext(BookDataContext);

  useEffect(() => {
    const getBookData = async () => {
      const data = await getToDoLists();
      setBookData(data);
    }
    getBookData();
  }, [])

  console.log(bookData);

  return (
      <PrintCardList bookData={bookData}/>
  )
}

export default Home;
