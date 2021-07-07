import Image from 'next/image'

import realEstateSample from '@public/pexels-pixabay-534220.jpg'

function LandingPageBody1() {
    return (
        <div className="absolute h-4/5 flex flex-col w-full bg-gradient-to-r from-green-400 to-blue-500">
            <div className="flex flex-grow">
                <p className="p-10 w-2/5 flex-shrink-0 text-6xl text-indigo-900 font-bold self-center ">
                    Invest big for all
                </p>
                <div className="p-10 self-center flex-grow flex">
                    <div className="flex-grow"></div>
                    <div className="w-96 relative rounded self-center shadow-xl">
                      <Image className="rounded-lg" objectFit="contain" quality={100} src={realEstateSample} alt="Sample of a real estate project to invest in" placeholder="blur" />
                      {/* Leave break-words as a safety mechanism if css fails somehow */}
                      <div className="break-words rounded-lg p-2 text-xl bg-white">
                        <p className="font-bold">Ahuntsic, QC</p>
                        <p className="line-clamp-2">Projet de développement social de 200 appartements avec le financement de la BDC.</p>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
                            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blueGray-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow"></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageBody1;
