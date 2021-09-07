import React from 'react';

const MobileList=(props)=>{
    return(
        <div>
            <div className="row">
                <div className="col-5 p-5">
                    <img src={props.image} />
                </div>
                <div className="col-7 p-5">
                    <h1>{props.name}</h1>
                    <h3>{props.price}</h3>
                    <button type="button" className="btn btn-warning">Buy Now</button>
                    <button type="button" className="btn btn-primary">Delete</button>
                    <h3>{MobileList.props}</h3>
                </div>
            </div>
        </div>
    );
}

 export default MobileList;