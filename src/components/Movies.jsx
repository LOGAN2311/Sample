import React from 'react';

class Movies extends React.Component{

    render(){
    const {title, year, runtime, director} = this.props;
    const {onDelete} = this.props;

    return(
        <div>
            <table class="table">
                <tbody className="container-fluid">
                <tr>
                <div className="row">
                    <div className="col-3">
                        <td>{title}</td>
                    </div>
                    <div className="col-2">
                        <td>{year}</td>
                    </div>
                    <div className="col-2">
                        <td>{runtime}</td>
                    </div>
                    <div className="col-3">
                        <td>{director}</td>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger" onClick={() => onDelete(this.props.id)}>Delete</button>
                    </div>    
                </div>
                </tr>
                </tbody>
            </table>
        </div>
    );
    }
}

export default Movies;