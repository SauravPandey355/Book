import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/BookContext";

export default function BookShow({book}){
    const [showEdit,setShowEdit] = useState(false);
    const {deleteBook} = useContext(BookContext);
    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }
    const handleDeleteClick = () =>{
        deleteBook(book.id);
    }
    const handleSubmit = ()=>{
        setShowEdit(false);
    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }
    return(<div className="book-show">
        <img alt="books" 
            src = {`https://picsum.photos/seed/${book.id}/300/200`}
        />
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className = "delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    </div>);
}