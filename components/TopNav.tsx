import Link from "next/link";
import React, { useState } from "react";

function TopNav() {
  // the following statement are for dropdown
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex items-center bg-white overflow-hidden shadow-md w-screen">
      {/* Empty div used to space and leave the logo */}
      <div className="w-10"></div>
      <div
        onMouseLeave={() => setIsShown(false)}
        onMouseEnter={() => setIsShown(true)}
      >
        <button
          className={`p-4 font-bold text-center text-xl text-blue-500 ${
            isShown ? "text-blue-400" : ""
          }`}
        >
          Products
        </button>
        {isShown && (
          <ul className="absolute bg-gray-100 font-normal rounded-lg text-blue-300 z-10">
            <li className="p-4 font-normal hover:text-blue-400">
              <Link href="/warren">Warren Buffet</Link>
            </li>
            <li className="p-4 font-normal hover:text-blue-500">
              <Link href="/doge">DogeCoin</Link>
            </li>
            <li className="p-4 font-normal hover:text-blue-500">
              Hello, this is the first product
            </li>
            <li className="p-4 font-normal hover:text-blue-500">
              Hello, this is the first product
            </li>
          </ul>
        )}
      </div>
      <Link href="/">
        <a className="p-4 font-bold text-center text-xl text-blue-500 hover:text-blue-400">
          Ratings
        </a>
      </Link>
      <Link href="/about">
        <a className="p-4 text-center text-xl text-blue-500 font-bold hover:text-blue-400">
          Contacts
        </a>
      </Link>
      {/* The next div is for spacing */}
      <p className="flex-grow"></p>
      {/* End of div for spacing */}
      <Link href="/">
        <a className="mr-4 p-4 font-mono text-xl transition duration-500 ease-in-out text-gray-700 hover:text-white hover:bg-blue-600">
          Log In
        </a>
      </Link>
      <Link href="/">
        <a className="mr-4 py-2 p-4 rounded-full font-mono text-xl transition duration-500 ease-in-out text-gray-700 hover:text-white bg-blue-300 hover:bg-blue-600">
          Sign Up
        </a>
      </Link>
      <div className="w-10"></div>
    </div>
  );
}

export default TopNav;
