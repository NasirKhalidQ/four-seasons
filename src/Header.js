import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <nav className="gap-12 absolute bg-black p-6 h-auto sm:hidden w-1/2 justify-start top-0 right-0 text-xl border-l-2 border-b-2 border-white text-white z-10">
          <ul>
            <li className="mt-8 hover:text-seasons-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="mt-2 hover:text-seasons-primary">
              <Link to="/about">About</Link>
            </li>
            <li className="mt-2 hover:text-seasons-primary">
              <Link to="/services">Rooms</Link>
            </li>
            <li className="mt-2 hover:text-seasons-primary">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="flex bg-seasons-gray sm:px-12 pt-6 pb-2">
        <div className="">
          <Link to="/">
            <img
              className="flex w-1/2 md:w-3/4 "
              src="./imgs/logo.svg"
              width="200"
              height="200"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="hidden sm:flex flex-auto justify-end items-center gap-12 text-white">
          <li className="hover:text-seasons-primary transition duration-500 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-seasons-primary transition duration-500 ease-in-out">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-seasons-primary transition duration-500 ease-in-out">
            <Link to="/services">Rooms</Link>
          </li>
          <li className="hover:text-seasons-primary transition duration-500 ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              type="submit"
              className="py-2 w-full px-4 shadow-md bg-seasons-primary hover:bg-opacity-80 text-white transition duration-500 ease-in-out"
            >
              Make a Reservation
            </button>
          </li>
        </ul>
        <div className="absolute px-6 py-4 sm:hidden top-0 right-0 z-10">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
