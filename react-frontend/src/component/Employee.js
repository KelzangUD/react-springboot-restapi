import React, {useState, useEffect} from 'react';
import Service from '../service/Service';
import axios from 'axios';
// import EditEmployee from './EditEmployee';

const Employee=()=> {

    const [employees, setEmployees] = useState([]);
    // const [editClick, setEditClick] = useState(true);
    // const[employee, setEmployee] = useState([]);
    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {

        Service.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };
    async function deleteHandler(event) {
      console.log(event.target.value);
      let id= event.target.value;
        try {
            const res = await axios({
                method: 'delete',
                url: `http://localhost:9090/employeeAPI/employees/${id}`,
            });
    
          const result = {
            data: res.data,
          };
        } catch (err) {
          console.log(err);
        }
      }
      async function editHandler(event) {
        console.log(event.target.value);
        // let id= event.target.value;
        //   try {
        //       const res = await axios({
        //           method: 'get',
        //           url: `http://localhost:9090/employeeAPI/employees/${id}`,
        //       });
      
        //     const result = {
        //       data: res.data,
        //     };
        //     setEmployee(result);
        //     console.log(result);
        //   } catch (err) {
        //     console.log(err);
        //   }
        //   setEditClick(true);
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
                <tbody>{
                  employees.map(employee =>
                    <tr key = {employee.id}>
                        <td> {employee.id }</td>
                        <td> {employee.name }</td>
                        <td> {employee.age }</td>    
                        <td> {employee.email }</td>
                        <td> <button type="button" className="btn btn-primary" value={employee.id} onClick={editHandler}>Edit</button></td>    
                        <td> <button type="button" className="btn btn-warning" value={employee.id} onClick={deleteHandler}>Delete</button></td>
                    </tr>)
                  }
                </tbody>
            </table>
            
        </div>
    )
}

export default Employee;