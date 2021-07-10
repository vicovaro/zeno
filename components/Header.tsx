import Link from "next/link";

function Header() {
  return (
    <div className="relative">
      <div className="flex flex-wrap flex-col md:flex-row mt-4">
        {/* Brand Logo */}
        <div className="font-bold text-4xl md:pl-6">Zeno</div>
        {/* Top navigation options that stays on the left */}
        <button className="font-semibold md:pl-12 hover:text-blue-700">
          Projects
        </button>
        <button className="font-semibold md:pl-6 hover:text-blue-700">
          Contacts
        </button>
        {/* Empty div for resizing */}
        <div className="flex-grow"></div>
        {/* Log In and Sign Up button duo */}
        <button className="font-semibold py-2 px-4 rounded transition duration-500 ease-in-out md:mr-6 hover:text-blue-700 hover:shadow">
          Login
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out md:mr-4 hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
