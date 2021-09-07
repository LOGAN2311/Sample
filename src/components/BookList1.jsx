import React from 'react';

class BookList1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {isShow: false}
    }
    
    infoHandler = () =>{
        this.setState({
            isShow:!this.state.isShow
        })
    }

    render(){
    const {src, name, price, content, info} = this.props;
    const {onDelete} = this.props;
    
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
                    {this.state.isShow ? <p>{info}</p> : ''}
                    <button className="btn btn-warning" onClick={this.infoHandler}>Info</button>
                    <button className="btn btn-danger m-2" onClick={() => onDelete(this.props.id)}>Delete</button>
                </div>
            </div><hr/>
        </div>
    );
    }
}

export default BookList1;
