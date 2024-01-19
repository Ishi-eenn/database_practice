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

  // console.log(bookData);
  return (
      <PrintCardList bookData={bookData}/>
  )
}

export default Home;


// docker run --rm --name test --network test-network -p 5432:5432 -v test:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password postgres:12.11

// docker run -it --rm --network test-network -v $(pwd):/sql -e PGPASSWORD=password postgres:12.11 psql -h test -U postgres
