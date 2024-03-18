import { useContext, useState } from "react";
import BookContext from "../context/BookContext";

export default function BookEdit({book,onSubmit}){
    const [title,setTitle] = useState(book.title);
    const {editBookById} = useContext(BookContext);
    const handleChange = (e)=>{
        setTitle(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit();
        editBookById(book.id,title);
    }
    return(<form className="book-edit" onSubmit={handleSubmit}>
        <input className="input" value = {title} onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
    </form>);
}