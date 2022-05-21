import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__content">
        <img
          onClick={() => navigate("/")}
          className="navbar__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="avatar logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
