import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import Card from './card';
import './home.css'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getToDoList = async () => {
      const data = await getDocs(collection(db, 'toDoList'));
      const sortedPosts = data.docs.map(doc => ({...doc.data(), id: doc.id})).sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate());
      setPosts(sortedPosts);
    }
    getToDoList();
  }, [])

  return (
    <div className='cardPage'>
      {posts.map((post) =>
        {
        return (
            <Card key={post.id}
                  title={post.title}
                  text={post.text}
                  date={post.timestamp.toDate().toString().split(' ')}
                  id={post.id}
            />
      )})}
    </div>
  )
}

export default Home;
