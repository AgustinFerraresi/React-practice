import { Card, Button } from "react-bootstrap"
import { useState } from "react"
import "./BookItem.css"

const BookItem = ({title,author,rating,pageCount,imageUrl}) =>{
    const [bookTitle,setBookTitle] = useState(title)

    const handleClick = () => {
        setBookTitle("Actualizado!! ( ͡° ͜ʖ ͡°)");
    }

    return(
        <Card className="card-container">
            <Card.Img variant="top" height={500} src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}/>
            <Card.Body>
                <Card.Title>{bookTitle}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>
                    {rating}
                    {rating > 1 ? " Estrellas" : " Estrella"} 
                </div>
                <p>{pageCount} páginas</p>
                <Button onClick={handleClick}>Actualizar</Button>
            </Card.Body>
        </Card>
    );
}

export default BookItem