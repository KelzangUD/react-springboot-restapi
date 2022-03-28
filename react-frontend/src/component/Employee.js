import React, {useState, useEffect} from 'react'
import Service from '../service/Service';

const Employee=()=> {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {

        Service.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Employees List</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee Name</th>
                        <th> Employee Age</th>
                        <th> Employee Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id }</td>
                                    <td> {employee.name }</td>
                                    <td> {employee.age }</td>    
                                    <td> {employee.email }</td>
                                </tr>
                        )
                    }

                </tbody>


            </table>

        </div>
    )
}

export default Employee;