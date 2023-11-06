import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../services/withRouter';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        });
    }
    
    addEmployee(id){
        this.props.navigate(`/add-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.navigate(`/view-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className= "text-center">Employees List</h2>
                <div className = "row">
                    <Link to='/add-employee/_add'> 
                        <button className='btn btn-primary btn-lg'>Add Employee </button> 
                    </Link>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName}</td>
                                        <td> {employee.lastName}</td>
                                        <td> {employee.emailId}</td>
                                        <td>
                                            <button className='btn btn-info'onClick={ () => this.addEmployee(employee.id)}>Update</button>
                                            <button className='btn btn-danger' style={{marginLeft: "10px"}} onClick= { () => this.deleteEmployee(employee.id)}>Delete</button>
                                            <button className='btn btn-info' style={{marginLeft: "10px"}} onClick= { () => this.viewEmployee(employee.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>



                    </table>

                </div>


            </div>
        );
    }
}

export default withRouter(ListEmployeeComponent);