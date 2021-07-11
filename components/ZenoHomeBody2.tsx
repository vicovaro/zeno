import Image from "next/image";
import socialImage from "@public/shane-rounce-DNkoNXQti3c-unsplash.jpg";

function ZenoHomeBody2() {
  return (
    <div className="relative">
      <div className="h-screen bg-black">
        <div className="grid grid-cols-3 pt-8">
          {/* First detail */}
          <div className="p-8">
            <div className="text-4xl text-white">
              <p className="text-red-400 inline">Socially</p> conscious, helping
              more young adults get their first home a reality.
            </div>
            <div className="p-8">
              <Image
                src={socialImage}
                alt="Young adults first time home ownership"
              ></Image>
            </div>
          </div>
          {/* Second detail */}
          <div className="p-8">
            <div className="text-4xl text-white">
              <p className="text-blue-400 inline">Alternative</p> investment
              help hedge risks and help saving into retirements.
            </div>
            <div className="p-8">
              <Image
                src={socialImage}
                alt="Young adults first time home ownership"
              ></Image>
            </div>
          </div>
          {/* Third detail */}
          <div className="text-4xl text-white bg-black">Body2 to be done.</div>
        </div>
      </div>
    </div>
  );
}

export default ZenoHomeBody2;
