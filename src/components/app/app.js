import React, {useEffect, useState} from 'react';
import Header from "../header/header";
import EditBook from "../editBook/editBook";
import AddBook from "../addBook/addBook";
import {Route, Routes} from "react-router-dom";
import BooksList from "../booksList/booksList";


const App = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [code, setCode] = useState(0);
    const [bookInformation, setBookInformation] = useState('')
    const [category, setCategory] = useState('');
    
    
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<BooksList/>}/>
                <Route path="edit" element={<EditBook/>}/>
                <Route path="addBook" element={<AddBook
                    title={title} setTitle={setTitle}
                    body={body} setBody={setBody}
                    author={author} setAuthor={setAuthor}
                    code={code} setCode={setCode}
                    category={category} setCategory={setCategory}
                    bookInformation={bookInformation}
                    setBookInformation={setBookInformation}
                />}
                />
            </Routes>
        </div>
    );
};

export default App;