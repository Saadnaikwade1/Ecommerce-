import React, { useContext, useEffect, useState } from "react";
import api from "../config/baseUrl";
import { FaEdit, FaTrash } from "react-icons/fa";
import Context from "./Context";
import { useNavigate } from "react-router-dom";

function AllProduct() {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dn, setDn] = useState(false);
  let obj = useContext(Context);
  let navigate = useNavigate();

  useEffect(() => {
    api
      .get("/prods")
      .then((res) => {
        setProds(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  // know more
  let km = (pid) => {
    navigate(`/km/${pid}`);
  };

  let addcart = (prod) => {
    if (obj.state.token === "") {
      navigate("/login");
    } else {
      api
        .post("http://localhost:5000/addcart", {
          pid: prod._id,
          title: prod.title,
          price: prod.price,
          img: prod.img,
          uid: obj.state.uid,
        })
        .then(() => {
          setDn(true);
          setTimeout(() => {
            setDn(false);
          }, 2000);
        });
    }
  };

  return (
    <div className="prod-wrapper">
      {dn && <div>product added to cart</div>}
      <h1 className="page-title">All Products</h1>

      {/* Loading State */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading products...</p>
        </div>
      )}

      {/* Product List */}
      {!loading && (
        <div className="prod-con">
          {prods.length === 0 ? (
            <p className="empty-text">No products found</p>
          ) : (
            prods.map((prod) => (
              <div className="prodcard" key={prod._id}>
                {/* Top Action Icons */}
                {obj.state.role == "admin" && (
                  <div className="card-actions">
                    <FaEdit className="edit-icon" />
                    <FaTrash className="delete-icon" />
                  </div>
                )}

                <img
                  src={`http://localhost:5000/images/${prod.img}`}
                  alt={prod.title}
                />

                <div className="prodcont">
                  <h2 className="title">{prod.title}</h2>

                  <p className="desc">
                    {prod.desc.length > 80
                      ? prod.desc.substring(0, 80) + "..."
                      : prod.desc}
                  </p>

                  <p className="cat">Category: {prod.cat}</p>
                  <p className="price">₹{prod.price}</p>

                  <button className="btn" onClick={() => km(prod._id)}>
                    Know More
                  </button>
                  <button className="addcart-btn" onClick={() => addcart(prod)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default AllProduct;
