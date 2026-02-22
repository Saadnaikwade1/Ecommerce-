import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/baseUrl";
import Context from "./Context";
import Cookies from "js-cookie";


function Login() {
  const [data, setData] = useState({ _id: "", pwd: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const user = useContext(Context);

  const fun = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const login = () => {
    api.post("/login", data).then((res) => {
      if (res.data.token !== undefined) {
        Cookies.set("lg", JSON.stringify(res.data), { expires: 2 });
        user.updState(res.data);
        navigate("/");
      } else {
        setMsg(res.data.msg);
      }
    });
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h1 className="form-title">Login</h1>

        {msg && <p className="form-msg">{msg}</p>}

        <input
          type="text"
          name="_id"
          placeholder="Email"
          onChange={fun}
        />

        <input
          type="password"
          name="pwd"
          placeholder="Password"
          onChange={fun}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
