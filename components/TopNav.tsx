import Link from "next/link";
import Image from 'next/image'

import dogeLogo from '../public/doge_logo.png';

function TopNav() {
  return (
    <div className="flex items-center flex-wrap bg-gray-500 overflow-hidden w-screen">
      <Link href="/">
        <a>
          <Image className="center" width="100" height="100" src={dogeLogo} alt="PUT DOGE BACK"/>
        </a>
      </Link>
      <div className="group inline-block relative">
        <a className="p-4 text-center text-xl text-blue-100 font-light hover:text-blue-400">products</a>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <Link href="/">
        <a className="p-4 text-center text-xl text-blue-100 font-light hover:text-blue-400">ratings</a>
      </Link>
      <Link href="/">
        <a className="p-4 text-center text-xl text-blue-100 font-light hover:text-blue-400">contacts</a>
      </Link>
      <p className="flex-grow"></p>
      <Link href="/">
        <a className="p-4 mr-4 text-center text-xl text-blue-300 font-bold hover:text-blue-700">login</a>
      </Link>
    </div>
  );
}

export default TopNav;
