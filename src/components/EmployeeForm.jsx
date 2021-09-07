import React from 'react';

class EmployeeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          items: [ ],
          text: "",
          age: "",
          updateText: "", 
          updateAge: ""
      };
      this.handleName = this.handleName.bind(this);
      this.handleAge = this.handleAge.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateChange = this.updateChange.bind(this);
    }

    delete(e) {
      this.state.items.splice(this.state.items.indexOf(e), 1);
      this.setState({ items: this.state.items });
    }
    updateChange(e) {
      this.setState({ updateText: e.target.value });
    }
    update(e) {
      e.showHide = true;
      this.setState(e);
      const updateItem = {
        text: this.state.updateText ? this.state.updateText : e.text,
        age: this.state.updateAge ? this.state.updateAge : e.age,
        id: Date.now()
      };
      this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
      this.setState({ items: this.state.items });
    }
    handleName(e) {
      this.setState({ text: e.target.value, updateText: e.target.value });
    }
    handleAge(e) {
      this.setState({ age: e.target.value, updateAge: e.target.value });
    }
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {   
        text: this.state.text,
        age: this.state.age,
        id: Date.now()
      };
      this.state.items.unshift(newItem);
      this.setState({ items: this.state.items });
      this.setState({ text : ""});
      this.setState({ age : ""});
    }    
    
    render() {
        let element;
        if(this.state.items.length===0){
            element = ' '
        }else{
            element = <div className="container" style={{backgroundColor: "#F3F00C"}}><hr/>
                        <h4>Employee List</h4><hr/>
                        <table className="border-table">
                            <thead>
                                <tr>
                                    <th>Employee Name &nbsp;&nbsp;</th>
                                    <th>Employee Age &nbsp;&nbsp;</th>
                                    <th style={{paddingLeft: "200px"}}>Action</th>
                                </tr>
                            </thead>
                        </table><hr/>
                      </div>
        }
        let table;
        if(this.state.items.length===0){
            table = ' '
        }else{      
            table = <div style={{backgroundColor: "#F1f1f1"}}>
                      <table>
                        <tbody>
                            {this.state.items.map((item, index) => (
                            <tr key={item.id + index}>
                                <td className={item.showHide ? "hidden" : ""} style={{paddingLeft: "50px"}}> {item.text} </td>
                                <td className={item.showHide ? "hidden" : ""} style={{paddingLeft: "80px"}}> {item.age} </td>
                                {/* <td className={item.showHide ? "" : "hidden"}>
                                <input type="text" onChange={this.updateChange} defaultValue={item.text}/>&nbsp;
                                </td> */}
                                <td>
                                  <button className={item.showHide ? "hidden btn btn-warning" : "btn save-btn btn-warning"} 
                                      onClick={() => this.update(item)} style={{marginLeft: "200px"}}>
                                      Edit
                                  </button>&nbsp;
                                  <button className="btn del-btn btn-danger"
                                      onClick={() => this.delete(item)}>
                                      Delete
                                  </button>
                                </td><hr/>
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
                  </div>  
        }  
            
        return (
          <div className="container border mt-5 p-5 text-center" style={{width: "700px"}}>
            <h3>Employee Details - Crud Opeations</h3><br/> 
            <form onSubmit={this.handleSubmit}>
                        <label htmlFor="employeeName">Name</label><br/> 
                        <input type="text" value={this.state.text} placeholder="Enter Name" 
                        onChange={this.handleName} /><br/><br/>
                        <label htmlFor="employeeAge">Age</label><br/>
                        <input type="text" value={this.state.age} placeholder="Enter Age" 
                        onChange={this.handleAge} /><br/><br/>
                    <div className="col-lg-12 text-center">
                        <button type="submit" className="btn save-btn btn-success" onClick={this.handleSubmit}>
                            Save
                        </button>
                    </div><br/><br/><br/>
            </form>
            <div>{element}</div>
            <div>{table}</div>
          </div>
        );
      }
      
}
    
export default EmployeeForm;