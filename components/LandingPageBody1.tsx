import Image from "next/image";

function LandingPageBody1() {
  return (
    <div className="relative h-4/5 flex flex-col w-full bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex flex-grow">
        <p className="p-10 w-2/5 flex-shrink-0 text-6xl text-indigo-900 font-bold self-center ">
          <p className="pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-black to-yellow-400">Invest big for all</p>
          <p className="flex-grow flex items-center text-4xl text-indigo-900">Together, we crowdfund socially responsible projects</p>
        </p>
        <div className="p-10 self-center flex-grow flex">
        </div>
      </div>
    </div>
  );
}

export default LandingPageBody1;
