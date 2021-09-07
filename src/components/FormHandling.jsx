import React from 'react';

class FormHandling extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          items: [ ],
          text: "",
          updateText: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.updateChange = this.updateChange.bind(this);
    }
    
    render() {
        let element;
        if(this.state.items.length===0){
            element = ' '
        }else{
            element = <div className="container">
                        <h4>Food List</h4><br/>
                        <table className="border-table">
                            <thead>
                                <tr>
                                    <th>Food Name &nbsp;&nbsp;</th>
                                    <th style={{paddingLeft: "180px"}}>Action</th>
                                </tr>
                            </thead>
                        </table>
                      </div>
        }
        let table;
        if(this.state.items.length===0){
            table = ' '
        }else{ 
            table = <table>
                        <tbody>
                            {this.state.items.map((item, index) => (
                            <tr key={item.id + index}>
                                <td className={item.showHide ? "hidden" : ""}> {item.text} </td>
                                {/* <td className={item.showHide ? "" : "hidden"}>
                                <input type="text" onChange={this.updateChange} defaultValue={item.text}/>&nbsp;
                                </td> */}
                                <td>
                                  <button className={item.showHide ? "hidden btn btn-warning" : "btn save-btn btn-warning"} 
                                      onClick={() => this.update(item)}>
                                      Update
                                  </button>&nbsp;

                                  <button className="btn del-btn btn-danger"
                                      onClick={() => this.delete(item)}>
                                      Delete
                                  </button>
                                </td>
                            </tr>
                            ))}
                        </tbody><br/>
                        <div className="text-center p-2">
                          <button className="btn del-btn btn-danger" size="lg" variant="danger"
                                    style={{margin: "0 auto", display: "block"}}  onClick={() => this.setState({ items: []})}>
                                      Clear
                          </button>
                        </div>
                    </table>
        }  
            
        return (
          <div className="container border mt-5 p-5 text-center">
            <h3>React Crud Operations</h3><br/> 
    
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="foodName">Name : &nbsp;</label>
              <input type="text" value={this.state.text} placeholder="Enter Name" id="mainInput" onChange={this.handleChange} />&nbsp;<br/><br/>
              <button type="submit" className="btn save-btn btn-success" onClick={this.handleReset}>
                Save
              </button>
            </form><br/><hr/>
            <div>{element}</div>
            <div>{table}</div>
          </div>
        );
      }
      delete(e) {
        this.state.items.splice(this.state.items.indexOf(e), 1);
        this.setState({ items: this.state.items });
      }
      /*updateChange(e) {
        this.setState({ updateText: e.target.value });
      }*/
      update(e) {
        e.showHide = true;
        this.setState(e);
        const updateItem = {
          text: this.state.updateText ? this.state.updateText : e.text,
          id: Date.now()
        };
        this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
        this.setState({ items: this.state.items });
      }
      handleChange(e) {
        this.setState({ text: e.target.value, updateText: e.target.value });
      }
      handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.state.items.unshift(newItem);
        this.setState({ items: this.state.items });
        this.setState({ text: ' ' });
      }    
}
    
export default FormHandling;