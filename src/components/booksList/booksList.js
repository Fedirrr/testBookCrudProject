import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {deleteBook, editableBooksId, setBooks} from "../redux/booksReducer";
import {Button} from "antd";
import {Link} from "react-router-dom";
import "./booksList.css"

const BooksList = () => {
    const dispatch = useDispatch()
    const books = useSelector(({books}) => books);
    
    useEffect(() => {
        const fetchBooks = async () => {
            if (localStorage.getItem("books")) return
            const {data} = await axios.get("http://localhost:8000/books")
            dispatch(setBooks(data))
        }
        fetchBooks()
    }, [])
    
    return (
        <div className="bookListWrapper">
            <table >
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Author</th>
                    <th>ISBN Code</th>
                    <th>Information about the book</th>
                    <th>Actions</th>
                </tr>
                {
                    books.map(({id, title, body, author, code,link}) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                                <td>{author}</td>
                                <td>{code}</td>
                                <td><a href={link} target="_blank" style={{color:"black"}}>Клік</a></td>
                                <td>
                                    <div style={{
                                        display:"flex",
                                        padding:"5px"
                                    }}>
                                        <Button
                                            style={{
                                                marginRight: "5px",
                                                backgroundColor: "#eb5959",
                                                color: "white"
                                            }}
                                            onClick={() => dispatch(deleteBook(id))}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            style={{backgroundColor: "#ffd947", color: "white"}}
                                            onClick={() => {
                                                dispatch(editableBooksId(id))
                                            }}>
                                            <Link to="edit">Edit</Link>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    )
};

export default BooksList;

