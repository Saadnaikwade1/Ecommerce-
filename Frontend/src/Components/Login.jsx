import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/baseUrl"
import Context from "./Context";
import Cookies from "js-cookie"


function Login() {
  let [data, SetData] = useState({ _id: "", pwd: "" });
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let user=useContext(Context)


  let fun=(e)=>{
    let {name,value}=e.target
    SetData({...data,[name]:value})
  }


  let login=()=>{
    api.post("/login",data).then((res)=>{
      if(res.data.token!=undefined){
        Cookies.set("lg",JSON.stringify(res.data),{"expires":2})
        user.updState(res.data)
        navigate("/")
      }else{
        setMsg(res.data.msg)
      }
    })
  }


  return (
  <div className="form-wrapper">
  <div className="form">
    {msg && <h2 className="form-msg">{msg}</h2>}
    <input type="text" name="_id" placeholder="Enter your email" onChange={fun} />
    <input type="password" name="pwd" placeholder="Enter your password" onChange={fun} />
    <button onClick={login}> Login</button>
  </div>
</div>
  )}

export default Login;
