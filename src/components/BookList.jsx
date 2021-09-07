import React from 'react';

const BookList = (props) => {
    const{src, name, price, content} = this.props;
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img className="border rounded" src={src} alt=" " />
                </div>
                <div className="col-6 p-5">
                    <h3>{name}</h3>
                    <p>{content}</p> 
                    <h5>Price: Rs.{price}</h5>
                    <button className="btn btn-warning">Buy Now</button>
                    <button className="btn btn-danger m-2">Delete</button>
                </div>
            </div><hr/>
        </div>
    );
}

export default BookList;

                