import React from "react";
import Container from "../container";
import style from "../../style/navbar.module.css";

const Header = () => {
  return (
    
      <header className="fixed top-0 right-0 left-0 bg-cyan-900">
        <Container className={"w-full flex justify-between text-white h-12 items-center"}>
        <div>
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li className={style.container}>
              Resources <div className="hidden h-auto bg-cyan-50 text-cyan-900 whitespace-nowrap  right-0">
                <a href="" className="hover:bg-cyan-600 w-full p-4">FAQ</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Power to Choose</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Energy News</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Plans</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Blogs</a>
              </div>
            </li>
            <li className={style.container}>About
            <div className="hidden h-auto bg-cyan-50 text-cyan-900 whitespace-nowrap right-0">
                <a href="" className="hover:bg-cyan-600 w-full p-4">About Our Team</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Contact us</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Other Contacts</a>
                <a href="" className="hover:bg-cyan-600 w-full p-4">Partner With Us</a>
              </div>
            </li>
          </ul>
        </nav>
        </Container>
      </header>
    
  );
};

export default Header;
