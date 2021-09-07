import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={isShow: true}
    }

    render(){
    const {value, id} = this.props;
    const {onIncrease, onDecrease, onDelete} = this.props;

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-secondary m-2">{value}</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-success m-2" onClick={() => onIncrease(id)}>+</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-warning m-2" disabled={value === 0 ? "disabled":""} onClick={() => onDecrease(id)}>-</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-danger m-2" onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>
        </div>
    );    
    }
}

export default Counter;