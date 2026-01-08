import React, { useEffect, useState } from "react";
import api from "../config/baseUrl";

function AllProduct() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    api.get("/prods")
      .then((res) => setProds(res.data))
      .catch((err) => console.error(err));
    }, []);
   

  return (
    <div className="prod-con">
      {prods.length === 0 ? (
        <p style={{ color: "#fff" }}>No products found</p>
      ) : (
        prods.map((prod) => (
          <div className="prodcard" key={prod._id}>
            <img
              src={`http://localhost:5000/images/${prod.img}`}
              alt={prod.title}
            />
            <div className="prodcont">
              <h1>{prod.title}</h1>
              <p>{prod.desc}</p>
              <h3>Cat: {prod.cat}</h3>
              <h3>Price: ₹{prod.price}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllProduct;
