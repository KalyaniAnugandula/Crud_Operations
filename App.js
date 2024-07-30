import React from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import AddUser from './Axios/AddUser'
import UpdateUser from "./Axios/UpdateUser";
import GetUser from "./Axios/GetUser";
import "./Styles/App.css"
import "./Styles/add.css"
import './Styles/Update.css';
import PageNotFound from "./Axios/PageNotFound";
// import './Styles/index.css'
let App=()=>{
  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<GetUser />}> </Route>
    <Route path="/add" element={<AddUser />}></Route>
      <Route path="/edit/:id" element={<UpdateUser />}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}
export default App;