import React, { useState, useEffect } from "react";

function NavElements() {
  return (
    <div className="md:grid md:grid-cols-7 gap-12">
      <ul className="text-sm xs:flex xs:flex-nowrap xs:items-center xs:justify-evenly md:col-span-4 lg:w-1/2">
        <li className=" hover:bg-purple-300 p-2 rounded-lg whitespace-nowrap lg:mx-1">
          <a href="/#">Topup</a>
        </li>
        <li className=" hover:bg-purple-300 p-2 rounded-lg whitespace-nowrap lg:mx-1">
          <a href="/#">Request Topup</a>
        </li>
        <li className=" hover:bg-purple-300 p-2 rounded-lg whitespace-nowrap lg:mx-1">
          <a href="#how-it-works">How it works</a>
        </li>
        <li className=" hover:bg-purple-300 p-2 rounded-lg whitespace-nowrap lg:mx-1">
          <a href="/#">Help</a>
        </li>
      </ul>

      <div className="text-base font-bold flex flex-col items-center md:col-start-5 md:col-span-3 md:flex-row">
        <button className="text-purple-600 my-2 md:mx-2 lg:mx-5">Signin</button>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex flex-nowrap justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          <span className="ml-2">Register</span>
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  const menu = document.querySelector("#nav-below-md");
  const landingPage = document.querySelector("#landing-page");

  useEffect(
    () => {
      if (winWidth >= 768 && menu && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
        landingPage.classList.add("mt-20");
        landingPage.classList.remove("mt-80", "xs:mt-52");
      }
    },
    // eslint-disable-next-line
    [winWidth]
  );

  useEffect(() => {
    function handleResize() {
      setWinWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const handleNavbar = () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      landingPage.classList.remove("mt-20");
      landingPage.classList.add("mt-80", "xs:mt-52");
    } else {
      menu.classList.add("hidden");
      landingPage.classList.add("mt-20");
      landingPage.classList.remove("mt-80", "xs:mt-52");
    }
  };

  return (
    <nav className="App-header ">
      <div className="flex flex-row justify-between items-center md:grid md:grid-cols-10 md:justify-items-center">
        <h1 className="text-purple-600 text-3xl md:text-4xl font-bold md:col-span-2 md:justify-self-start">
          <a href="/">Tabs.</a>
        </h1>
        <div className="hidden md:block md:col-start-3 md:col-span-8 md:justify-self-end ">
          <NavElements />
        </div>
        <div className="cursor-pointer md:hidden" onClick={handleNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div id="nav-below-md" className="mt-4 hidden">
        <NavElements />
      </div>
    </nav>
  );
}

export default Navbar;
