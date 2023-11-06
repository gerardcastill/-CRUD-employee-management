import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { withParams } from '../services/withParams';
import { withRouter } from '../services/withRouter';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        const {id} = props.params;

        this.state = {
            id,
            firstName:'',
            lastName: '',
            emailId: '',
        }
    }
    
    // get employee by id and set it to state. if state id is negative its adding employee, if its positive it is updating employee
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then ( (res) => {
                let employee= res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })
        }
    }

    // creates a JS employee object to save or update employee information
    saveOrUpdateEmployee = (e) =>{        
        e.preventDefault();
        let employee= {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' + JSON.stringify(employee));

        // creates or updates employee based on id positive or negative (should insert progmatic navigation instead of <Link>)
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee)
        }else{
            EmployeeService.updateEmployee(employee, this.state.id);
        }
        this.props.navigate('/employees');
    }

    // sets the state of the employee object onClick
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    // gets title of page depending on positive/negative value of id
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className='text-center'>Add Employee</h3>
        }else{
            return <h3 className='text-center'>Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {
                                this.getTitle()
                            }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name</label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Address</label>
                                        <input placeholder='Email Address' name='emailId' className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                        <button className='btn btn-success' onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <Link to='/employees'>
                                            <button className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</button>
                                        </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(withParams(CreateEmployeeComponent));