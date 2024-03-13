import { useState } from "react";

export default function BookCreate({onCreate}){
    const [title,setTitle] = useState('');
    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onCreate(title);
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