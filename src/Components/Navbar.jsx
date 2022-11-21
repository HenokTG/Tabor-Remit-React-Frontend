import React from "react";

function Navbar() {
  return (
    <nav className="App-header flex flex-row justify-between items-center ">
      <div>
        <h1 className="text-purple-600 text-3xl font-bold">
          <a href="/">Tabs.</a>
        </h1>
      </div>
      <div>
        <ul className="text-sm flex flex-nowrap ">
          <li className="mx-4 hover:bg-purple-300 px-4 py-2 rounded-lg">
            <a href="#">Topup</a>
          </li>
          <li className="mx-4 hover:bg-purple-300 px-4 py-2 rounded-lg">
            <a href="#">Request Topup</a>
          </li>
          <li className="mx-4 hover:bg-purple-300 px-4 py-2 rounded-lg">
            <a href="#">How it works</a>
          </li>
          <li className="mx-4 hover:bg-purple-300 px-4 py-2 rounded-lg">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>

      <div className="text-base font-bold flex flex-row">
        <button className="text-purple-600 mx-5">Signin</button>
        <div className="bg-purple-600 text-white px-6 py-2 mx-5 rounded-lg flex flex-nowrap">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
