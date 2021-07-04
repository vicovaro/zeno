import Link from "next/link";
import Image from "next/image";

import dogeLogo from "../public/doge_logo.png";

function TopNav() {
  return (
    <div className="flex items-center flex-wrap bg-gray-500 overflow-hidden w-screen">
      <Link href="/">
        <a>
          <Image
            className="center"
            width="100"
            height="100"
            src={dogeLogo}
            alt="PUT DOGE BACK"
          />
        </a>
      </Link>
      <div className="flex group inline-block relative">
        <a className="p-4 text-center text-xl text-blue-100 font-light hover:text-blue-400">
          products
        </a>
        <div className="absolute  z-10 hidden hover:block">
          <p className="absolute block hover:block">Hello</p>
        </div>
      </div>
      <Link href="/">
        <a className="p-4 text-center text-xl text-blue-100 font-light hover:text-blue-400">
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
