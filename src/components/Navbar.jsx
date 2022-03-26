import React from "react";
import { Link } from "react-router-dom";
import { IoIosClipboard } from "react-icons/io";

function Navbar() {
  return (
    <div className="navbar navbar-light bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link h2">
          <Link to={"/"} className="text-success">
            <IoIosClipboard />
          </Link>
        </li>

        <li className="nav-item nav-link h3 ">
          <Link to={"/register"} className="text-decoration-none text-light">
            REGISTER
          </Link>
        </li>
        <li className="nav-item nav-link h3">
          <Link to={"/login"} className="text-decoration-none text-light">
            LOGIN
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
