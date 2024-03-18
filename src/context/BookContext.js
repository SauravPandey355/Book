import { createContext, useCallback, useState } from "react";
import axios from "axios";
const BookContext = createContext();

function Provider({children}){
    const [book,setBook] = useState([]);
    
    const fetchBook = useCallback(async()=>{
        const res = await axios.get("http://localhost:3001/books");
        setBook(res.data);
    },[]);
    const deleteBook =async (id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`);
        fetchBook();
    }
    
    const handleCreate = async (title)=>{
        await axios.post("http://localhost:3001/books",{
            title:title
        });
        fetchBook();
    }
    
    const editBookById = async(id,title)=>{
        await axios.put(`http://localhost:3001/books/${id}`,{
            title:title
        });
        fetchBook();
    }
    const values = {
        book:book,
        handleCreate:handleCreate,
        deleteBook:deleteBook,
        editBookById:editBookById,
        fetchBook:fetchBook
    };
    return(<BookContext.Provider value={values}>
        {children}
    </BookContext.Provider>)
}
export {Provider};
export default BookContext;