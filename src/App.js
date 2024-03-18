import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from './context/BookContext';
export default function App(){
    const {fetchBook} = useContext(BookContext);
    useEffect(()=>{
        fetchBook();
    },[fetchBook]);
    
    return(<div className="app">
        <BookList/>
        <BookCreate/>
    </div>);
}