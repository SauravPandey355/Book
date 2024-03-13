import BookShow from "./BookShow";

export default function BookList({bookList,onDelete,onEdit}){
    const renderedBooks = bookList.map((book)=>{
        return(<BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book = {book} />);
    });
    return(<div className="book-list">
        {renderedBooks}
    </div>);
}