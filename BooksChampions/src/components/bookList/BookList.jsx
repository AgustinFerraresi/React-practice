import BookItem from "../bookItem/BookItem"


const BookList = ({books}) => {
    const booksMapped = books.map(book => 
        <BookItem 
        key={`${book.title}.${book.author}`}
        title={book.title}
        author={book.author}
        rating={book.rating}
        pageCount={book.pageCount}
        imageUrl={book.imageUrl}
        />
    );
    
    return <div className="d-flex justify-content-center flex-wrap gap-4">{booksMapped}</div>
}

export default BookList