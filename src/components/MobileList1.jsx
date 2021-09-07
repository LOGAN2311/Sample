import React from 'react';

class MobileList1 extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {image: this.props.image,
                      name: this.props.name,
                      price: this.props.price};
      }

    incrementhandle = () => {
                       console.log(this.state);
      }

    render(){
        const{image, name, price} = this.props;
        return(
        <div>
            <div className="row">
                <div className="col-5 p-5">
                    <img src={image} alt=" "/>
                </div>
                <div className="col-7 p-5">
                    <h1>{name}</h1>
                    <h3>{price}</h3>
                    <button type="button" className="btn btn-warning">Buy Now</button>
                    <button type="button" className="btn btn-danger m-2" onClick={this.incrementhandle}>Delete</button>
                </div>
            </div>
        </div>
        );
    } 
}

export default MobileList1;