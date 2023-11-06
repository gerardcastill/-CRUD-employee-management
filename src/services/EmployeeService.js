import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    // gets employee info from DB
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    // posts employee information to DB
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    // gets employee by id from DB
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId)
    }

    // puts updated information into DB
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    // delete employee
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()