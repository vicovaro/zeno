import Image from "next/image";
import landingPageSection1Image from "@public/frederick-wallace-Bfz-FCsqv0Y-unsplash.jpg";

function LandingPageSection1() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 w-full h-screen">
        <div className="self-center pl-12">
          <div className="text-4xl p-6">
            Invest in <p className="inline text-red-500">social </p>
            real estate, as well as large scale housing projects all over
            Canada. Diverse your savings with
            <p className="inline text-blue-400"> alternative </p> investment
            while making a positive impact with
            <p className="inline text-green-500"> attractive </p>
            return.
          </div>
        </div>
        <div className="relative self-center pl-12 h-4/5">
          <Image
            alt="Social housing"
            src={landingPageSection1Image}
            layout="fill"
            objectFit="contain"
            quality={100}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default LandingPageSection1;
