import Image from "next/image";
import landingPageImage from "@public/frederick-wallace-Bfz-FCsqv0Y-unsplash.jpg";

function ZenoHomeBackgroundImage() {
  return (
    <div className="relative">
      {/* Background image floating in the background */}
      <div className="overflow-hidden w-screen h-screen">
        <Image
          alt="Social housing"
          src={landingPageImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        ></Image>
      </div>
    </div>
  );
}

export default ZenoHomeBackgroundImage;
