import Image from 'next/image'

import realEstateSample from '@public/pexels-pixabay-534220.jpg'

function MainLandingBody() {
    return (
        <div className="absolute h-4/5 flex flex-col w-full bg-gradient-to-r from-green-400 to-blue-500">
            <div className="flex flex-grow">
                <p className="p-10 w-2/5 flex-shrink-0 text-6xl text-indigo-900 font-bold self-center ">
                    Invest big for all
                </p>
                <div className="p-10 self-center flex-grow flex">
                    <div className="flex-grow"></div>
                    <div className="w-96 relative rounded self-center">
                      <Image className="rounded-lg" objectFit="contain" quality={100} src={realEstateSample} alt="Sample of a real estate project to invest in" placeholder="blur" />
                      {/* Leave break-words as a safety mechanism if css fails somehow */}
                      <div className="break-words rounded-lg p-2 text-xl bg-white">
                        <p className="font-bold">Ahuntsic, QC</p>
                        <p className="line-clamp-2">Projet de développement social de 200 appartements avec le financement de la BDC.</p>
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                                Task in progress
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-emerald-600">
                                30%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
                            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
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

export default MainLandingBody;
