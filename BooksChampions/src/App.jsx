import { Row } from "react-bootstrap";

import BookList from "./components/bookList/BookList";
import NewBook from "./components/newBook/NewBook";
import { useState } from "react";

export const booksArray = [
  {
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    rating: 3,
    pageCount: 410,
    imageUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
  },
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    rating: 4,
    pageCount: 256,
    imageUrl:
      "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80.jpg",
  },
  {
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    rating: 5,
    pageCount: 352,
    imageUrl:
      "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80.jpg",
  },
  {
    title: "50 sombras de Grey",
    author: "E.L James",
    rating: 1,
    pageCount: 514,
    imageUrl:
      "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
  },
];

const App = () => {
  const [books,setBooks] = useState(booksArray);

  const handleAddBook = (newBook) => {
    const bookTrans = {
      ...newBook,
      rating: parseInt(newBook.rating),
      pageCount: parseInt(newBook.pageCount)
    };
    setBooks([bookTrans, ...books])
  };

  return (
    <div>
      <BookList books={books}/>
      <NewBook handleAddBook={handleAddBook}/>
    </div>
  );
};

export default App;

