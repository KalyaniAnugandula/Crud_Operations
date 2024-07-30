import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import AddUser from './AddUser'

let GetUser=()=>{
    let [user,setUser]=useState([])
    useEffect(()=>{
        let x=axios.get("http://localhost:2020/users");
        x.then(res=>setUser(res.data))
    })

        let x=useNavigate();
        console.log(x)
        let ev=()=>{
            x("/add")
        }
        let y=useNavigate();
        console.log(y)
        let ey=()=>{
            y('/edit')
        }
  
        let remove=(id)=>{
            axios.delete(`http://localhost:2020/users/${id}`)
        }
        let edit=(id)=>{
            axios.put(`http://localhost:2020/users/${id}`)
        }
return(
    <>
        <center>

    <div id="bg-container">
      
    <div id="subcontainer1"></div>
    <div id="subcontainer2"></div> 
</div>
  <div id="container">
    <h1 id="heading">CRUD OPERATIONS</h1>
    <br></br>
    <br></br>
    <table border={2}>
        <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>    </th>
            </tr>
            </thead>
            <tbody>
    
            {
                user.map(val=>{
                    return(
                        <>
                        <tr key={val.id}>
                        <th>{val.id}</th>
                       <th> {val.name}</th>
                        <th>{val.email} </th>
                        <th id="btn-con">
                            <Link to={`/edit/${val.id}`}>
                            <button  type="button" class="btn btn-light" >Update</button>
{/*                             
                               &nbsp;&nbsp;&nbsp;&nbsp; */}
                            </Link>
                           
                            <button  type="button" class="btn btn-light" onClick={()=>{remove(val.id)}}>Delete</button>
                            </th>
                        </tr>
                        </>
                    )
                })
            }
   
        </tbody>
            </table>
            <br /><br /><br />
            <button type="button" class="btn btn-secondary btn-lg 
            " onClick={ev}>Add New User</button>


  </div>
  </center>

  </>
)
}
export default GetUser;