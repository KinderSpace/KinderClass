import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";

const handleLogout = (props) => {
  logout().then((data) => {
    props.left(data.user.username);
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
      <div className="itemNavbar">
        <Link to="/games">Games</Link>
      </div>
      {props.user ? (
        <>
          {props.user.role === "teacher" ? (
            <div className="itemNavbar">
              <Link to="/stats">Stats</Link>
            </div>
          ) : (
            ""
          )}
          <div className="itemNavbar">
            <Link to="/" onClick={() => handleLogout(props)}>
              Logout
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
