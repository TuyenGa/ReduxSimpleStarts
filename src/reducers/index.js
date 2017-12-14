import { combineReducers } from  'redux';
import books from './reducer_book';
import activeBook from './reducer_active_book';

const rootReducer = combineReducers({
    books,
    activeBook
})

export default rootReducer;