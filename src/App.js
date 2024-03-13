import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App(){
    const [book,setBook] = useState([]);
    const deleteBook = (id)=>{
        const updatedBook = book.filter((books)=>{
            return books.id !== id;
        });
        setBook(updatedBook);
    }
    const handleCreate = (title)=>{
        const obj = {id:Math.ceil(Math.random()*100000000),title:title};
        setBook([obj,...book]);
    }
    const editBookById = (id,title)=>{
        const updatedBook = book.map((books)=>{
            if(books.id === id){
                books.title = title;
            }
            return books;
        });
        setBook(updatedBook);
    }
    return(<div className="app">
        <BookList bookList={book} onDelete = {deleteBook} onEdit = {editBookById}/>
        <BookCreate onCreate={handleCreate}/>
    </div>);
}