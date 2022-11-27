import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([])

  const createBook = async (title) => {

    const response = await axios.post('http://127.0.0.1:5000/books',{
      title
    } );
    const updatedBooks = [
      ...books,
      response.data
    ];
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {
          ...book,
          title: newTitle
        }
      }
      return book;
    })

    setBooks(updatedBooks)
  }

  const deleteBookById = (bookId) => {
    console.log('delete clicked for ', bookId)
    const updatedBooks = books.filter((book) => {
      return book.id !== bookId
    })
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
