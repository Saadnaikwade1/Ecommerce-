import React, { useState } from "react";
import api from "../config/baseUrl";


function AddProduct() {
  const [data, setData] = useState({
    title: "",
    price: "",
    desc: "",
    cat: "",
  });

  const [img, setImg] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fun1 = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!img) {
      setMsg("Please select an image");
      return;
    }

    setLoading(true);
    setMsg("");

    const fd = new FormData();
    for (let key in data) {
      fd.append(key, data[key]);
    }
    fd.append("img", img);

    api
      .post("/addprod", fd)
      .then((res) => {
        setMsg(res.data.msg);
        setData({ title: "", price: "", desc: "", cat: "" });
        setImg(null);
      })
      .catch(() => setMsg("Something went wrong"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="addprod-page">
      <div className="addprod-card">
        <h2 className="addprod-title">Add Product</h2>

        <input
          className="addprod-input"
          type="text"
          name="title"
          placeholder="Product Title"
          value={data.title}
          onChange={fun}
        />

        <input
          className="addprod-input"
          type="text"
          name="cat"
          placeholder="Category"
          value={data.cat}
          onChange={fun}
        />

        <input
          className="addprod-input"
          type="text"
          name="price"
          placeholder="Price"
          value={data.price}
          onChange={fun}
        />

        <textarea
          className="addprod-textarea"
          name="desc"
          placeholder="Product Description"
          value={data.desc}
          onChange={fun}
        />

        <input
          className="addprod-file"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={fun1}
        />

        <button
          className="addprod-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>

        {msg && <p className="addprod-msg">{msg}</p>}
      </div>
    </div>
  );
}

export default AddProduct;
