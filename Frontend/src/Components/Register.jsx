import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/baseUrl"
function Register() {
  let [data, setData] = useState({ _id: "", pwd: "", name: "", phno: "" });
  let [msg, setMsg] = useState("");
  let navigate = useNavigate();
  let fun = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let reg=()=>{
    api.post("/add",data).then((res)=>{
        if(res.data.msg=="Account created")
        {
            setMsg(res.data.msg)
            setTimeout(() => {
                
                navigate("/login")
            }, 3000);

        }
        else{
            setMsg(res.data.msg)
        }
    })
  }



  return (
    <div className="form-wrapper">
    <div className="form">
       {msg && <h2 className="form-msg">{msg}</h2>}

      <input type="text" onChange={fun} name="_id" placeholder="Enter email" />
      <input type="text" onChange={fun} name="name" placeholder="Enter name" />
      <input
        type="text"
        onChange={fun}
        name="pwd"
        placeholder="Enter password"
      />
      <input
        type="text"
        onChange={fun}
        name="phno"
        placeholder="Enter phone number"
      />
      <button onClick={reg}>Register</button>
    </div>
    </div>
  );
}

export default Register;
