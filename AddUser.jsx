import React, { useState } from "react";
import axios from "axios";
// import './index.css'
import { useNavigate } from 'react-router-dom'
let AddUser=()=>{    
    let [values,setValues] = useState({name:"",email:""});
    let change=(e)=>{
        // more than one value i want to send it so thats why ive taken array for both name and value
        setValues({...values,[e.target.name]:[e.target.value]})
        // console.log(values)
    }
    let navigate=useNavigate()
    let sendData=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:2020/users",values)
        .then(res=> navigate('/'))
    }

 
return(
    <div id="add-container">
         <form style={{border:"2px solid black",width:"30vw",padding:"30px",margin:"60px"}} action="" id="add-form">
     <h1 id="add-heading">Add User </h1>
     <label id="namee"  >Name : </label>
     <input placeholder="Enter Your Name" name="name" value={values.name} type="text" onChange={change} id="add-user-input"></input>
     <br /><br />
     <label onChange={e=>(e.target.value)} id="email-input">Email :  </label>
     <input placeholder="Enter Your email" name="email" value={values.email} type="email" onChange={change} id="add-email-input"></input>
     <br /><br />
     <button onClick={sendData} id="add-user-btn">Add</button>
         </form>
    
</div>
)
}
export default AddUser;