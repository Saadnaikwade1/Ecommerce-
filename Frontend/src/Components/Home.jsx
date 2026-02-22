import React from "react";
import { Link, Outlet } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      {/* Category Menu */}
      <div className="sub-menu">
        <Link to="/" className="menu-link">All</Link>
        <Link to="/mobiles" className="menu-link">Mobiles</Link>
        <Link to="/computers" className="menu-link">Computers</Link>
        <Link to="/gadgets" className="menu-link">Gadgets</Link>
        <Link to="/others" className="menu-link">Others</Link>
      </div>

      {/* Products Section */}
      <div className="outlet-div">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
