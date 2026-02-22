import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/baseUrl";


function Register() {
  const [data, setData] = useState({
    _id: "",
    pwd: "",
    name: "",
    phno: "",
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const fun = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const reg = () => {
    api.post("/add", data).then((res) => {
      if (res.data.msg === "Account created") {
        setMsg(res.data.msg);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setMsg(res.data.msg);
      }
    });
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h1 className="form-title">Create Account</h1>

        {msg && <p className="form-msg">{msg}</p>}

        <input
          type="text"
          name="_id"
          placeholder="Email"
          onChange={fun}
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={fun}
        />

        <input
          type="password"
          name="pwd"
          placeholder="Password"
          onChange={fun}
        />

        <input
          type="text"
          name="phno"
          placeholder="Phone Number"
          onChange={fun}
        />

        <button onClick={reg}>Register</button>
      </div>
    </div>
  );
}

export default Register;
