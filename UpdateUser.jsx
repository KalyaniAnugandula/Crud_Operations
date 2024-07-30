import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
let UpdateUser=()=>{    
    let [values,setValues] = useState({name:"",email:""});
    let change=(e)=>{
        // more than one value i want to send it so thats why ive taken array for both name and value
        setValues({...values,[e.target.name]:[e.target.value]})
        // console.log(values)
    }
    let navigate=useNavigate()
 
    let {id}=useParams();
    console.log(id)
   useEffect(()=>{
    axios.get("http://localhost:2020/users/"+id).then(res=>setValues(res.data))
   },[])
//    console.log(x)
     let sendData=(e)=>{
   e.preventDefault();
   axios.put("http://localhost:2020/users/"+id,values)
   .then(res=> navigate('/'))  
     }
return(
    <div id="update-container">
         <form style={{border:"2px solid black",width:"30vw",padding:"30px",margin:"60px"}} action="" id="update-form">
     <h1 id="update-heading">Update User page</h1>
     <label  id="update-name">Name : </label>
     <input placeholder="Enter Your Name" name="name" value={values.name} type="text" onChange={change} id="update-name-input"></input>
     <br /><br />
     <label onChange={e=>(e.target.value)} id="update-email">Email :  </label>
     <input placeholder="Enter Your email" name="email" value={values.email} type="email" onChange={change} id="update-email-input"></input>
     <br /><br />
     <button onClick={sendData } id="update-btn">Edit</button>
         </form>
    </div>

)
}
export default UpdateUser;