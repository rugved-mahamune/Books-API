import React from 'react';

export const BookList = (props) => {
    return ( 
            <><h4>Books</h4>
            <table className="responsive-table highlight">
            <thead>
                <tr>
                    <th>
                        Book name
                    </th>
                    <th>
                        Author name
                    </th>
                    <th>
                        Page
                    </th>
                    <th>
                        Price
                    </th>
                    <th className="cellcentered">
                        Action
                    </th>
                </tr>
            </thead>
            {props.books.map((item, index) => (
                <tbody key={item._id}>
                    <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.author}
                        </td>
                        <td>
                            {item.page}
                        </td>
                        <td>
                            {item.price}
                        </td>
                        <td key={index} className="cellcentered">
                            <button key={index._id} onClick={props.viewCurrentBook.bind(this,item)} id="btnView" className="waves-effect waves-light btn-small rightsp" type="button">View</button>
                            <button key={index._id} onClick={props.editCurrentBook.bind(this,item)} id="btnEdit" className="waves-effect waves-light btn-small rightsp" type="button">Edit</button>
                            <button key={index._id} onClick={props.deleteCurrentBook.bind(this,item)} id="btnDelete" className="waves-effect waves-light btn-small rightsp" type="button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table></>
     );
}



export const  BookSingle = (props) => {
    return (
 
        <div className="row">
            <h4>Selected Book</h4>
            <div className="col s12">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src="books.jpeg"/>
                        <span className="card-title">{props.book.name}</span>
                    </div>
                    <div className="card-content">
                        <p className="card-panel teal lighten-2" >
                            Author Name: {props.book.author}
                        </p>
                        <p className="card-panel teal lighten-2" >
                            Total Pages: {props.book.page}
                        </p>
                        <p className="card-panel teal lighten-2" >
                            Book Price: {props.book.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}