import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App(){
    const [book,setBook] = useState([]);
    const fetchBook = async()=>{
        const res = await axios.get("http://localhost:3001/books");
        setBook(res.data);
    }
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        fetchBook();
    },[flag]);
    
    const deleteBook =async (id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`);
        setFlag(!flag);
    }
    
    const handleCreate = async (title)=>{
        await axios.post("http://localhost:3001/books",{
            title:title
        });
        setFlag(!flag);
    }
    
    const editBookById = async(id,title)=>{
        await axios.put(`http://localhost:3001/books/${id}`,{
            title:title
        });
        setFlag(!flag);
    }
    return(<div className="app">
        <BookList bookList={book} onDelete = {deleteBook} onEdit = {editBookById}/>
        <BookCreate onCreate={handleCreate}/>
    </div>);
}