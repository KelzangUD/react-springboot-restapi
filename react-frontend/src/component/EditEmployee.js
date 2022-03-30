const EditEmployee = (props)=>{
    const confirmHandler = ()=>{
        console.log("confirm clicked");
    }
    return(
        <>
        <tr key = {props.id}>
            <td> <input>{props.id }</input> </td>
            <td> <input>{props.name }</input> </td>
            <td> <input>{props.age }</input> </td>    
            <td> <input>{props.email }</input></td>
            <td> <input><button type="button" className="btn btn-primary" value={props.id} onClick={confirmHandler}>Confirm</button></input> </td>    
        </tr>
        </>
    );
};

export default EditEmployee;