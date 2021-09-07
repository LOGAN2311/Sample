import React from 'react';
import Counter from './Counter';
import Badge from "react-bootstrap/Badge";

class Counters extends React.Component{
    constructor(props){
        super(props);
        this.state = {items: [ 
                               {id:1, value:0},
                               {id:2, value:0},
                               {id:3, value:0},
                               {id:4, value:0}]
        };
    }

    incrementHandle = item => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = {...item};
        items[item-1].value++;
        this.setState({item});
    }
  
    decrementHandle = item => {
        const items = [...this.state.items];
        const index = items.indexOf(item);
        items[index] = {...item};
        items[item-1].value--;
        this.setState({isShow:!this.state.isShow});
    }
    
    resetHandle = item => {
        this.state.items.map(item => {
            item.value = 0
            return item;
        });
        this.setState({item});
    }

    deleteHandle = itemID => {
        const items = this.state.items.filter(item => item.id !== itemID);
        this.setState({ items: items});
      }

    render(){     
        
    return(
    <div className="p-5">
        <h3 className="p-2 text-center border">Counter App</h3>
        <h5 className="p-2 border">Navbar <Badge color="danger">{this.state.items.filter(item=>item.value > 0).length}</Badge></h5>
        <button className="btn btn-dark m-3" onClick={this.resetHandle}>Reset</button>
        {this.state.items.map(item => <Counter key={item.id} 
                                               id={item.id}
                                               value={item.value} 
                                               onIncrease={this.incrementHandle} 
                                               onDecrease={this.decrementHandle}
                                               onDelete={this.deleteHandle} />)}   
    </div>    
    );
    }
}

export default Counters;

