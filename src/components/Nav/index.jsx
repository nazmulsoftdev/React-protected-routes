import React, { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ContextAPI from "../../context/ContextAPI";

function NavBar() {
  const { isLogin, userAuth } = useContext(ContextAPI);
  return (
    <nav className="nav-section">
      <button onClick={userAuth}>{isLogin ? "Logout" : "Login"}</button>
      <Link to="Dashboard" className="dashboard-item">
        Dashboard
      </Link>
    </nav>
  );
}

export default NavBar;
