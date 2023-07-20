import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=expo">
            <h6>EXPO</h6>
          </Link>
          <Link className="link" to="/?cat=cinéma">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=jeux">
            <h6>JEUX</h6>
          </Link>
          <Link className="link" to="/?cat=code">
            <h6>CODE</h6>
          </Link>
          <Link className="link" to="/?cat=miam">
            <h6>MIAM</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logoutNavbar}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              CO
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              TAP
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
