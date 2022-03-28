import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:9090/employeeAPI/employees';

class Service{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new Service();