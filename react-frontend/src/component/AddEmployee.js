import axios from 'axios';
import {useState} from 'react';

const AddEmployee = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const nameHandler = (event)=>{setName(event.target.value);}
    const ageHandler = (event)=>{setAge(event.target.value);}
    const emailHandler = (event)=>{setEmail(event.target.value);}
    async function userDetail() {
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:9090/employeeAPI/employees',
                data: {
                    name: name,
                    age: age,
                    email: email,
                }
            });
    
          const result = {
            data: res.data,
          };
        } catch (err) {
          console.log(err);
        }
      }
    return(
        <div className="container">
            <form>
                    <label htmlFor="name">Name</label>
                    <input type="test" className="form-control" id="name" onChange={nameHandler}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" onChange={ageHandler}/>
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={emailHandler}/>
                    <button type="submit" className="btn btn-primary" onClick={userDetail}>Submit</button>
            </form>
        </div>
    )
};
export default AddEmployee;