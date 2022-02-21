import React, {useState} from 'react';
import {Button, Form, Input, notification} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updatedBookItem} from "../redux/booksReducer";

const EditBook = () => {
    const dispatch = useDispatch()
    
    const editableBookId = useSelector(({editableBookId}) => editableBookId)
    
    const editableBookItemSelector = useSelector((state) => state.books.find((el) => el.id === editableBookId));

    const [title, setTitle] = useState(editableBookItemSelector.title)
    const [body, setBody] = useState(editableBookItemSelector.body)
    const [author, setAuthor] = useState(editableBookItemSelector.author)
    const [code, setCode] = useState(editableBookItemSelector.code)
    const [category, setCategory] = useState(editableBookItemSelector.category)
    const [link, setLink] = useState(editableBookItemSelector.link)
    
    const popUpHandler = () => {
        notification.open({
            message: 'Notification Title',
            description: "Ваші дані були змінені"
        });
        dispatch(updatedBookItem(
            {...editableBookItemSelector, title, body, author, code, category, link})
        )
    }
    
    return (
        <div className="formWrapper">
            <form className="form">
                <label htmlFor="title">Title</label>
                <Input
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter book title"
                />
                <label htmlFor="body">Body</label>
                
                <Input
                    name="body"
                    value={body}
                    placeholder="Enter book body"
                    onChange={(e) => setBody(e.target.value)}
                />
                <label htmlFor="author">Author</label>
                
                <Input
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter book author"
                />
                <label htmlFor="category">Category</label>
                
                <Input
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter book category"
                />
                <label htmlFor="information">Information</label>
    
                <Input
                    name="information"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter book information"
                />
    
                
                <label htmlFor="code">ISBN Code</label>
                <Input
                    name={code}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter book code"
                />
                <div>
                    <Button
                        onClick={popUpHandler}
                        style={{marginRight: "5px"}}>
                        Edit
                    </Button>
                    
                    <Button>
                        <Link to="/">
                            Back to list
                        </Link>
                    </Button>
                </div>
            
            </form>
        </div>
    );
};

export default EditBook;

