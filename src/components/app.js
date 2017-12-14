import React , { Component } from 'react';
import Books from '../container/books';
import ActiveBook from '../container/active_book';

export default class App extends Component {
    render(){
        return(
            <div>
                <Books />
                <ActiveBook/>
            </div>
        );
    }
}