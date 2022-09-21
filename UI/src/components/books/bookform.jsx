import React from 'react';
import axios from 'axios'

class BookForm extends React.Component {

    constructor(props){
        super(props);
        this.refName = React.createRef();
        this.refAuthor = React.createRef();
        this.refPage = React.createRef();
        this.refPrice = React.createRef();
    }

    submitBook = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:3000/book', {
            name: this.refName.current.value,
            author: this.refAuthor.current.value,
            page: this.refPage.current.value,
            price: this.refPrice.current.value
        })
        .then((response) => {
            alert('Book added!');
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    render() {
        return (
            <div className="row">
                <h4>Add New Book</h4>
                <form className="col s12" onSubmit={this.submitBook.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="name" ref={this.refName} type="text"/>
                                <label htmlFor="name">Book Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="author" ref={this.refAuthor} type="text"/>
                                <label htmlFor="author">Book Author</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="page" ref={this.refPage} type="text"/>
                                <label htmlFor="page">Page</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="price" ref={this.refPrice} type="text"/>
                                <label htmlFor="price">Price</label>
                        </div>
                    </div>
                    {/* <button class="btn waves-effect waves-light" type="submit" name="action">Add Book</button> */}
                    <button className="waves-effect waves-light btn-small" type="submit" name="action">Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default BookForm;