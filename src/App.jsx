
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (id,time) => {
    setReadingTime(readingTime + time)
    // console.log('connect id',id)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookMarks)
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto gap-6'>
          <Blogs handleBookmarks={handleBookmarks} 
          handleReadingTime={handleReadingTime}>
          </Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
