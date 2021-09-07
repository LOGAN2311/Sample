import React from 'react';

var count = 1;
class Count extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }
    
    incrementhandle = () => {
      this.setState({count: count++});
    }
  
    render() {
      return (
        <div className="p-5">
          <h5>The Click Count</h5>
          <button onClick={this.incrementhandle} className="btn btn-warning">Click Me</button>
          <p>{this.state.count}</p>
        </div>
      );
    }
  }

export default Count;









