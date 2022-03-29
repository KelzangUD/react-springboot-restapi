import React, {useState, useEffect} from 'react';
import Service from '../service/Service';
import axios from 'axios';

const Employee=()=> {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {

        Service.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };
    async function deleteHandler() {
        try {
            const res = await axios({
                method: 'delete',
                url: `http://localhost:9090/employeeAPI/employees`,
                // data: {
                //     id:id,
                // }
            });
    
          const result = {
            data: res.data,
          };
        } catch (err) {
          console.log(err);
        }
      }
      async function editHandler() {
        try {
            const res = await axios({
                method: 'delete',
                url: `http://localhost:9090/employeeAPI/employees`,
                // data: {
                //     id:id,
                // }
            });
    
          const result = {
            data: res.data,
          };
        } catch (err) {
          console.log(err);
        }
      }

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
                        <th> Edit</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id }</td>
                                    <td> {employee.name }</td>
                                    <td> {employee.age }</td>    
                                    <td> {employee.email }</td>
                                    <td> <button type="button" className="btn btn-primary" onClick={editHandler}>Edit</button></td>    
                                    <td> <button type="button" className="btn btn-warning" onClick={deleteHandler}>Delete</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Employee;