import { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/BookContext";

export default function BookList(){
    const {book} = useContext(BookContext);
    
    const renderedBooks = book.map((books)=>{
        return(<BookShow key={books.id} book = {books} />);
    });
    return(<div className="book-list">
        {renderedBooks}
    </div>);
}