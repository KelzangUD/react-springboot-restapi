import {useState} from 'react';

import Employee from './component/Employee';
import AddEmployee from './component/AddEmployee';
import './App.css';

function App() {
  const [page,setPage] = useState(true);
  const pageRedirect = ()=>{
    setPage(false);
  }
  
  return (
    <div className="App">
       {page ? <Employee/> : <AddEmployee/>}
       <div className="container">
       <button type="button" className="btn btn-primary" style={page ? {display:'block'} : {display: 'none'}}  onClick={pageRedirect}>Add Employee</button>   
       </div>
    </div>
    );
  }

export default App;
