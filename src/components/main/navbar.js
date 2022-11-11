import React, { useState, useEffect } from "react";

const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`md:hidden relative top-0 left-0 h-screen w-screen transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter bg-white`}
    >
      <div className="flex flex-col items-center text-xl font-medium list-none">
        <li className="my-5 text-text-primary hover-line">
          <a href="#home">Home</a>
        </li>
        <li className="my-5 text-text-primary hover-line">
          <a href="#home">About Us</a>
        </li>
        <li className="my-5 text-text-primary hover-line">
          <a href="#home">Projects</a>
        </li>
        <li className="my-5 text-text-primary hover-line">
          <a href="#home">Contact</a>
        </li>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const offSetTop = header.offsetTop;
    window.addEventListener("scroll", () => {
      setFixed(window.scrollY > offSetTop);
    });
  }, [fixed]);

  return (
    <div>
      <header
        className={`absolute top-0 left-0 w-full flex items-center z-10 overflow-hidden ${
          fixed ? "fixedNav" : ""
        }`}
      >
        <div className="container max-w-full md:mx-[40px] lg:mx-[8%]">
          <div className="flex place-items-center justify-between relative z-50">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-text-primary text-2xl block py-4 hover:text-main-color"
              >
                My Portfolio
              </a>
            </div>
            <div className="flex items-center px-4 md:hidden">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4"
                onClick={() => {
                  const hamburger = document.querySelector("#hamburger");
                  hamburger.classList.toggle("hamburger-active");
                  setOpen(!open);
                }}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:px-4 md:list-none md:text-lg">
              <li className="mx-3 text-text-primary hover-line">
                <a href="#home">Home</a>
              </li>
              <li className="mx-3 text-text-primary hover-line">
                <a href="#home">About Me</a>
              </li>
              <li className="mx-3 text-text-primary hover-line">
                <a href="#home">Projects</a>
              </li>
              <li className="mx-3 text-text-primary hover-line">
                <a href="#home">Contact</a>
              </li>
            </div>
          </div>
        </div>
      </header>
      <div className="container absolute overflow-hidden max-w-full md:mx-[40px] lg:mx-[8%]">
        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
