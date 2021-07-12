import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

function Header() {
  const [isFeatured, setFeatured] = useState(false);

  return (
    <div className="absolute inset-0 p-4 w-full top-bar-height z-10">
      <div className="flex flex-wrap flex-col md:flex-row">
        {/* Brand Logo */}
        <div className="font-bold text-4xl md:pl-6 pr-12">Zeno</div>
        {/* Top navigation options that stays on the left */}

        <div
          className="flex md:pr-6"
          onMouseEnter={() => setFeatured(true)}
          onMouseLeave={() => setFeatured(false)}
        >
          {/* Featured button for hand picked projects */}
          <div className="flex flex-row">
            <button className="align-middle font-semibold transition duration-500 ease-in-out hover:text-blue-100">
              Featured
            </button>
            {isFeatured ? (
              <ChevronUpIcon
                className="my-auto h-3 w-3 text-gray-700 fill-current"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="my-auto h-3 w-3 text-gray-500 fill-current"
                aria-hidden="true"
              />
            )}
          </div>
          {/* Show on hover */}
          {isFeatured && (
            <ul className="absolute top-14 p-4 bg-blue-100 rounded z-10">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Coca Cola</li>
            </ul>
          )}
        </div>

        <button className="font-semibold md:pr-6 hover:text-blue-100">
          Browse
        </button>
        <button className="font-semibold md:pr-6 hover:text-blue-100">
          About
        </button>
        {/* Empty div for resizing */}
        <div className="flex-grow"></div>
        {/* Log In and Sign Up button duo */}
        <button className="font-semibold py-2 px-4 transition duration-500 ease-in-out md:mr-6 hover:text-blue-100">
          Login
        </button>
        <button className="bg-blue-500 font-bold py-2 px-4 rounded transition duration-500 ease-in-out md:mr-4 hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
