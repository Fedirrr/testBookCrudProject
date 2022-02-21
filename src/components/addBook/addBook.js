import React from 'react';
import {Button, Form, Input, notification} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBook} from "../redux/booksReducer";
import './addBook.css'

const AddBook = (props) => {
    const dispatch = useDispatch()
    const {
        title, setTitle,
        body, setBody,
        code, setCode,
        author, setAuthor,
        category, setCategory,
        bookInformation, setBookInformation
    } = props
    const books = useSelector(({books}) => books)
    
    const popUpHandler = () => {
        notification.open({
            message: 'Notification Title',
            description: "Ваша книга було додана до списку"
        });
        
        let bookId = new Date().getTime()
        if (books.length && books[books.length - 1].id) {
            bookId = books[books.length - 1].id + 1
        }
        dispatch(addBook(
            {
                id: bookId,
                title: title,
                body: body,
                code: code,
                author: author,
                category: category,
                link: bookInformation
            }
        ))
        setTitle("")
        setBody("")
        setCode("")
        setAuthor("")
        setCategory("")
        setBookInformation("")
    }
    
    return (
        <div className="formWrapper">
            <Form className="form">
                <label htmlFor="title">Title</label>
                <Input
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter book title"
                />
                <label htmlFor="body">Body</label>
                <Input
                    name="body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Enter book body"
                />
                <label htmlFor="author">Author</label>
                <Input
                    name="author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    placeholder="Enter book author"
                />
                <label htmlFor="category">Category</label>
                <Input
                    name="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder="Enter book category"
                />
                <label htmlFor="Information">Information</label>
                <Input
                    name="information"
                    value={bookInformation}
                    onChange={e => setBookInformation(e.target.value)}
                    placeholder="Enter book information (https)"
                />
                <label htmlFor="code">ISBN Code</label>
                <Input
                    name="code"
                    type="number"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    placeholder="Enter book code"
                />
                
                
                <div style={{marginTop: "5px"}}>
                    <Button
                        onClick={popUpHandler}
                        style={{marginRight: "5px"}}
                        disabled={!title || !body || !author || !category || !code || !bookInformation}
                    >
                        Add
                    </Button>
                    
                    <Button>
                        <Link to="/">
                            Back to list
                        </Link>
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddBook;
