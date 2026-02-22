import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./Context";

function Navbar() {
  const user = useContext(Context);

  return (
    <nav className="nav">
      {/* Logo / Brand */}
      <div className="nav-left">
        <Link to="/" className="logo">
          ShopKart
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-right">
        {user.state.token !== "" && user.state.role === "admin" && (
          <Link to="/addprod" className="nav-link">
            Add Product
          </Link>
        )}

        {user.state.token === "" && (
          <>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/reg" className="nav-link">
              Register
            </Link>
           
          </>
        )}

        {user.state.token !== "" && (
          <>
            <Link to={"/cart"} className="nav-link">
            cart
            </Link>

            <Link to="/logout" className="nav-link logout">
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
