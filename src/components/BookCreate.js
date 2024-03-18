import { useState,useContext } from "react";
import BookContext from "../context/BookContext";
export default function BookCreate(){
    const {handleCreate} = useContext(BookContext);

    const [title,setTitle] = useState('');
    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleCreate(title);
        setTitle('');
    }

    return(<div className="book-create">
        <form onSubmit={handleSubmit}>
            <h3>Add Book</h3>
            <label>Title</label>
            <input className="input" value={title} name="TitleInput" onChange={handleChange}/>
            <button className="button">Create</button>
        </form>
    </div>);
}