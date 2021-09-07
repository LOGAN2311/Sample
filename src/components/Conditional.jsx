import React from 'react';

class Conditional extends React.Component{
    constructor(){
        super();
        this.state={isLoggedIn: true};
    }
        
    render(){
        /*// 1. if condition
        if(this.state.isLoggedIn){
            return <h1>Welcome Admin</h1>
        }else{
            return <h1>Welcome Guest</h1>
        }
        // 2. element variable
        let element;
        if(this.state.isLoggedIn){
            element = <div>Welcome Admin</div>
            }else{
                element = <div>Welcome Guest</div>
            };
            return(
              <div>
                  <h1>{element}</h1>
              </div>  
            );
        // 3. ternary operator
        return(this.state.isLoggedIn ? <h1>Welcome Admin</h1> : <h1>Welcome Guest</h1>);*/
        // 4. short circuit operator
        return(this.state.isLoggedIn && <h1>Welcome Admin</h1>)   
    }
}

export default Conditional;
