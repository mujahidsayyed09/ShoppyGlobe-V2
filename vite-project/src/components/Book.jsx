import "./style.css";
import { Link } from 'react-router-dom';


function Book(props){
    return (
        <div className="book-card">
        <img src={props.bookDetails.coverImage} width="200px" height="200px" className="book-cover"/>
        <div className="book-details">
            <h2 className="book-title">{props.bookDetails.title}</h2>
            <p className="book-author">{props.bookDetails.author}</p>
            <p className="book-description">{props.bookDetails.description}</p>
        </div>
        <Link to={`/book/${props.bookDetails.id}`}>
        <button className="viewDetails-btn">View Details</button>
        </Link>
        </div>
    )
}

export default Book;