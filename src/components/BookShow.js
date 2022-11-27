import {useState} from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {

  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = (bookId) => {
    onDelete(book.id)
  }

  const handleEditClick = (bookId) => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, book) => {
    setShowEdit(!showEdit)
    onEdit(id, book)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
  }

  return (
    <div className='book-show'>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete Book</button>
      </div>
    </div>

  )
}

export default BookShow