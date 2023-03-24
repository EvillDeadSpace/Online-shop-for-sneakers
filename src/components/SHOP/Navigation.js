import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "./Picture/logo.png";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../firebasse/base";
import { CurrentUser } from "../firebasse/base";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      navigate("/");
    } catch (error) {
      alert("error!");
    }
    setLoading(false);
  }

  return (
    <div>
      <Navbar Navbar fluid={true} rounded={false}>
        <Navbar.Brand>
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9 rounded-xl"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TUBA SNEAKERS
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/Home">
            <Navbar.Link to="/navbars" active={false}>
              <span className=" font-bold">Home</span>
            </Navbar.Link>
          </Link>

          <Link to="/About">
            <Navbar.Link to="/navbars" active={false}>
              <span className=" font-bold"> About</span>
            </Navbar.Link>
          </Link>
          <Link to="/Services">
            <Navbar.Link to="/navbars" active={false}>
              <span className=" font-bold"> Services</span>
            </Navbar.Link>
          </Link>
          <Link to="/Pricing">
            <Navbar.Link to="/navbars" active={false}>
              <span className=" font-bold">Shop</span>
            </Navbar.Link>
          </Link>
          <Link to="/Contact">
            <Navbar.Link to="/navbars" active={false}>
              <span className=" font-bold">Contact</span>
            </Navbar.Link>
          </Link>

          <Navbar.Link to="/navbars" active={false} className="">
            Currently logged in as: {currentUser?.email}
          </Navbar.Link>

          <Navbar.Link to="/navbars" active={false} className="">
            <button onClick={handleLogout}>
              {" "}
              <span className=" font-bold">Log Out</span>
            </button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
