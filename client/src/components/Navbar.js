import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="itemNavbar">
        {props.user && <div>Welcome, {props.user.username}</div>}
      </div>
      <div className="itemNavbar">
        <Link to="/">Home</Link>
      </div>
      {props.user ? (
        <>
          <div className="itemNavbar">
            <Link to="/games/tutti-frutti">Games</Link>
          </div>
          <div className="itemNavbar">
            <Link to="/" onClick={() => handleLogout(props)}>
              <a>Logout</a>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="itemNavbar">
            <Link to="/login">Login</Link>
          </div>
          <div className="itemNavbar">
            <Link to="/signup">Signup</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
