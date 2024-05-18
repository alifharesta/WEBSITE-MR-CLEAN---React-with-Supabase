// import React from "react";
import Logo from "../assets/icon-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Logout, User } from "../config/supabaseClient";

const Nav = () => {
  const [expand, setExpand] = useState(false);

  const navigate = useNavigate();
  const handleBookNow = () => {
    const login = localStorage.getItem("login");
    if (!login) {
      let confirm = window.confirm("You must login first");
      if (confirm) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }
  };

  const [user, setUser] = useState(User);
 
  
  const logout = async () => {
  await Logout()
  setUser(null);
  }

  
  return (
    <>
      <nav className="mx-auto container bg-white py-4 px-8 w-full flex justify-between items-center">
        <div className="flex-2 flex justify-between items-center gap-12">
          <div className="flex items-center">
            <a>
              <img src={Logo} alt="LogoCompany" />
            </a>
            <span className="span font-bold">Mr/s. Clean</span>
          </div>
          <ul
            className={`nav-navbar transition-all duration-300 md:flex flex-col md:flex-row justify-around md:gap-8 fixed md:static w-[80%] md:w-auto ${
              expand ? "right-0" : "-right-[900px]"
            } top-[0] h-full z-[1000] text-left p-4 bg-slate-300 md:bg-white`}
          >
            <li className="nav-list py-4 md:py-0">
              <a
                className="nav-link text-black hover:underline rounded-3xl "
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-list py-4 md:py-0">
              <a
                className="nav-link text-black hover:underline rounded-3xl "
                href="/features"
              >
                Features
              </a>
            </li>
            <li className="nav-list py-4 md:py-0">
              <a
                className="nav-link text-black hover:underline rounded-3xl "
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-list py-4 md:py-0">
              <a
                className="nav-link text-black hover:underline rounded-3xl "
                href="#"
              >
                Blog
              </a>
            </li>
            <hr className=" border-black" />
            <div className="login flex flex-col text-left md:hidden justify-start items-start gap-5 mt-4">
              <button onClick={() => navigate("/login")}>Login</button>
              <button onClick={handleBookNow}>Book Now</button>
            </div>
          </ul>
          <button
            onClick={() => setExpand(!expand)}
            className="btn btn-square btn-ghost block md:hidden absolute right-8 cursor-pointer z-[1100]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="login flex-1 hidden md:flex justify-end gap-5">

          {user ? <button onClick={logout}>Logout</button>: 
          <button onClick={() => navigate("/login")}>Login</button>
          }
          <button onClick={handleBookNow}>Book Now</button>
        </div> 
      </nav>
    </>
  );
};

export default Nav;
