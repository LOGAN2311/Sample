import React from 'react';

class EmployeeForms extends React.Component{
    constructor(){
        super()
        this.state={
            employeeData:[],
            act : 0,
            index : ""
        }
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;

        if(this.state.act === 0){
            let newEmployee = {
                "name" : name,
                "age" : age
            }
            employeeData.push(newEmployee);
        }else{
            let index = this.stateindex;
            employeeData[index].name = name;
            employeeData[index].age = age;
        }

        

        this.setState({
            employeeData : employeeData,
            act : 0
        })
        this.setState({ text: ' ' });

        //this.refs.myForm.reset();
    }

    handleEdit=(i)=>{
        let employeeData = this.state.employeeData[i];
        this.refs.txtName.value=employeeData.name;
        this.refs.txtAge.value=employeeData.age;

        this.setState({
            employeeData : employeeData,
            act : 1,
            index : i
        })
    }

    handleDelete=(i)=>{
        let employeeData = this.state.employeeData;
        employeeData.splice(i, 1);
        this.setState({
            employeeData: employeeData
        });
    }

    render(){
        let employeeData = this.state.employeeData;
        return(
            <div className="container-flex m-5 p-3 border text-center" style={{margin: "0 auto"}}>
                <h6>Employee Details - Crud Operations</h6><br/> 
                <form action="myForm">
                    <label htmlFor="employeeName">Name</label>&nbsp;
                    <input type="text" ref="txtName" placeholder="Enter Name" />&nbsp;
                    <label htmlFor="employeeAge">Age</label>&nbsp;
                    <input type="text" ref="txtAge" placeholder="Enter Age" />&nbsp;&nbsp;
                    <button className="btn btn-outline-success btn-sm" onClick={this.handleSubmit}>Save</button>
                </form><br/>

                <table>
                    <tr>
                        <th>Name</th>&nbsp;&nbsp;
                        <th>Age</th>
                    </tr>
                    {
                        employeeData.map((data, i) =>
                        <tr key={i}>
                            <td>{data.name}</td>&nbsp;&nbsp;
                            <td>{data.age}</td>
                            <td>
                                <button className="btn btn-outline-warning btn-sm" onClick={this.handleEdit(i)}>Edit</button>
                            </td>&nbsp;
                            <td>
                                <button className="btn btn-outline-danger btn-sm" onClick={this.handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </table>
            </div>
        );
    }
}

export default EmployeeForms;