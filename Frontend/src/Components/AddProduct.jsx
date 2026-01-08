import axios from "axios";
import React, { useState } from "react";
import api from "../config/baseUrl";
function AddProduct() {
  const [data, setData] = useState({
    title: "",
    price: "",
    desc: "",
    cat: "",
  });
  let [img,setImg]=useState(null)

  const [msg, setMsg] = useState("");

  const fun = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const fun1 = (e) => {
    setImg( e.target.files[0]);
  };

  const handleSubmit = () => {
    let fd = new FormData();
    for (let p in data) {
      fd.append(p, data[p]);
    }
      fd.append("img", img);

    api.post("/addprod", fd)
      .then((res) => setMsg(res.data.msg))
      .catch((err) => console.error(err));
    setData({
      title: "",
      price: "",
      desc: "",
      cat: "",
    });
    setImg(null)
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add Product</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={fun}
          value={data.title}
        />
        <input
          style={styles.input}
          type="text"
          onChange={fun}
          value={data.cat}
          name="cat"
          placeholder="Enter cat"
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Enter price"
          name="price"
          onChange={fun}
          value={data.price}
        />

        <textarea
          style={styles.textarea}
          placeholder="Enter description"
          name="desc"
          onChange={fun}
          value={data.desc}
        />

        <input
          style={styles.file}
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={fun1}
        
        />
        

        <button style={styles.button} onClick={handleSubmit}>
          Add Product
        </button>

        {msg && <p style={styles.msg}>{msg}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
  },
  card: {
    width: "360px",
    padding: "25px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "70px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    resize: "none",
  },
  file: {
    color: "#fff",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    background: "#ff9800",
    color: "#000",
    fontWeight: "bold",
  },
  msg: {
    marginTop: "12px",
    textAlign: "center",
    color: "#00ff99",
  },
};

export default AddProduct;
