import Image from 'next/image'
import landingPageImage from '@public/joel-filipe-RFDP7_80v5A-unsplash.jpg'

function ZenoHome() {
  return <div className="relative">
    {/* Background image */}
    <div className="fixed overflow-hidden w-screen h-screen">
      <Image
        alt="Social housing"
        src={landingPageImage}
        layout="fill"
        objectFit="cover"
        quality={100}></Image>
    </div>
    <div className="text-black z-10">
      this is good
    </div>
    <div className="text-black z-10">May I know what's going on</div>
  </div>;
}

export default ZenoHome;
