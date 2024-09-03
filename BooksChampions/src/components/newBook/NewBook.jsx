import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./NewBook.css";
import { useReducer, useState } from 'react';

const NewBook = ({handleAddBook}) => {
    const [title , setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating,setRating] = useState("");
    const [pagesQty,setPagesQty] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const handlerTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handlerAuthorChange = (event) => {
        setAuthor(event.target.value);
    };
    
    const handlerRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handlerPagesQtyChange = (event) => {
        setPagesQty(event.target.value);
    };

    const handlerImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handlerSubmitChange = (event) => {
        event.preventDefault();
        const newBook = {
            title: title,
            author: author,
            rating :rating,
            pageCount: pagesQty,
            imageUrl
        };
        handleAddBook(newBook);
        console.log("click");
    };

    return (
        <div className='form-container'>
            <Form className='form'>
                <h2 className='title'>Agregar Libro ( ͡° ͜ʖ ͡°)</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" value={title} onChange={handlerTitleChange} placeholder="Titulo del libro" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" value={author} onChange={handlerAuthorChange} placeholder="Autor" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" value={rating} onChange={handlerRatingChange} placeholder="Rating" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cantidad de paginas</Form.Label>
                    <Form.Control type="number" value={pagesQty} onChange={handlerPagesQtyChange} min={1} placeholder="Cantidad de paginas" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ImageURL</Form.Label>
                    <Form.Control type="text" value={imageUrl} onChange={handlerImageUrlChange} placeholder="ImageURL" />
                </Form.Group>

                <Button variant="primary" onClick={handlerSubmitChange} type="submit">
                    Agregar libro
                </Button>
            </Form>
        </div>
    );

}
export default NewBook