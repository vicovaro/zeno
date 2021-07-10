import Link from "next/link";

function Header() {
  return (
    <div className="relative">
      <div className="flex flex-wrap flex-col md:flex-row mt-2">
        <div className="md:pl-8">I have won</div>
        <div className="flex-grow"></div>
        <button className="font-semibold">Login</button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded md:mr-8 hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
