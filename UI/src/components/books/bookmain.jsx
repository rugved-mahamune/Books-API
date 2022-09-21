import axios from 'axios';
import {BookSingle, BookList} from '../books/booklist';
import BookForm from '../books/bookform';
import React from 'react';

class BookPage extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            books: [],
            currentBook: {},
        }
        this.updateCurrentBook = this.updateCurrentBook.bind(this);
        this.viewCurrentBook = this.viewCurrentBook.bind(this);
        this.editCurrentBook = this.editCurrentBook.bind(this);
        this.deleteCurrentBook = this.deleteCurrentBook.bind(this);
    }

    componentDidMount(){
        const url = 'http://localhost:3000/book';
        axios.get(url)
            .then((Response) => {
                this.setState({
                    books:Response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    updateCurrentBook (item){
        this.setState({
            currentBook: item,
        });
    }

    viewCurrentBook (item){
        this.setState({
            currentBook: item,
        });
    }

    editCurrentBook (item){
        this.setState({
            currentBook: item,
        });
    }

    deleteCurrentBook (item){
        this.setState({
            currentBook: item,
        });
    }

    render (){
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <nav>
                            <div className="nav-wrapper black">
                                <a href="#!" className="brand-logo"><i className="material-icons"></i>Assign Book Store</a>
                            </div>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col s6"><BookList books={this.state.books}
                            updateCurrentBook={this.updateCurrentBook}
                            viewCurrentBook ={this.viewCurrentBook}
                            editCurrentBook ={this.editCurrentBook}
                            deleteCurrentBook ={this.deleteCurrentBook}/>
                            <div className="col s12"><BookForm/></div>
                        </div>
                        <div className="col s6"><BookSingle book={this.state.currentBook}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookPage;