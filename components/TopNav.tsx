import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

import dogeLogo from "../public/doge_logo.png";

function TopNav() {
  // the following statement are for dropdown
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex items-center flex-wrap bg-gray-500 overflow-hidden w-screen">
      <div 
        onMouseLeave={ () => setIsShown(false)}
        onMouseEnter={ () => setIsShown(true)}>
        <button className="p-4 font-light text-center text-xl text-blue-100">
          hello
        </button>
        {isShown && (
          <ul className="absolute bg-gray-500 font-light text-blue-100 z-10">
            <li className="p-4">
              <Link href="/warren">
                Warren Buffet
              </Link>
            </li>
            <li className="p-4">
              <Link href="/doge">
                DogeCoin
              </Link>
            </li>
            <li className="p-4">
              Hello, this is the first product
            </li>
            <li className="p-4">
              Hello, this is the first product
            </li>
          </ul>
        )}
      </div>
      <Link href="/">
        <a className="p-4 font-light text-center text-xl text-blue-100 hover:text-blue-400">
          ratings
        </a>
      </Link>
      <Link href="/about">
        <a className="p-4 text-center text-xl text-blue-100 font-light hover:text-blue-400">
          contacts
        </a>
      </Link>
      {/* The next div is for spacing */}
      <p className="flex-grow"></p>
      {/* End of div for spacing */}
      <Link href="/">
        <a className="p-4 mr-4 text-center text-xl text-blue-300 font-bold hover:text-blue-700">
          login
        </a>
      </Link>
    </div>
  );
}

export default TopNav;
