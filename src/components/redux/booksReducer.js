import {baseBooks} from "../../mock/mock";

const SET_BOOKS = "SET_BOOKS";
const ADD_BOOK = "ADD_BOOK";
const DELETE_BOOK = "DELETE_BOOK";
const EDITABLE_BOOK_ID = "EDITABLE_BOOK_ID";
const UPDATE_BOOK_ITEM = "UPDATE_BOOK_ITEM";

const initialState = {
    books: JSON.parse(localStorage.getItem('books')) || baseBooks,
    editableBookId: null,
    loading: true
}
export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                loading: false,
                books: action.payload
            }
        
        case ADD_BOOK:
            const books = [...state.books, action.payload]
            localStorage.setItem('books', JSON.stringify(books))
            return {
                ...state,
                loading: false,
                books: books
            }
        case DELETE_BOOK:
            const deletedBooks = state.books.filter(({id}) => id !== action.payload)
            localStorage.setItem('books', JSON.stringify(deletedBooks))
            return {
                ...state,
                loading: false,
                books: deletedBooks
            }
        case EDITABLE_BOOK_ID:
            return {
                ...state,
                loading: false,
                editableBookId: action.payload
            }
        case UPDATE_BOOK_ITEM:
            const updatedBook = state.books.map((el) => {
                return el.id === action.payload.id ? action.payload : el
            })
            localStorage.setItem('books', JSON.stringify(updatedBook))
            return {
                ...state,
                loading: false,
                books: updatedBook,
            }
        default:
            return state
    }
}

export const setBooks = (books) => ({type: SET_BOOKS, payload: books});
export const addBook = (book) => ({type: ADD_BOOK, payload: book});
export const deleteBook = (book) => ({type: DELETE_BOOK, payload: book});
export const editableBooksId = (id) => ({type: EDITABLE_BOOK_ID, payload: id})
export const updatedBookItem = (book) => ({type: UPDATE_BOOK_ITEM, payload: book})
