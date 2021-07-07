import Image from "next/image";

function LandingPageBody1() {
  return (
    <div className="absolute h-4/5 flex flex-col w-full bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-grow">
        <p className="p-10 w-2/5 flex-shrink-0 text-6xl text-indigo-900 font-bold self-center ">
          Invest big for all
        </p>
        <div className="p-10 self-center flex-grow flex">
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageBody1;
