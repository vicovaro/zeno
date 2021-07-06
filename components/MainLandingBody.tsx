import Image from 'next/image'

import realEstateSample from '../public/pexels-pixabay-534220.jpg'

function MainLandingBody() {
    return (
        <div className="absolute h-4/5 flex flex-col w-full bg-gradient-to-r from-green-400 to-blue-500">
            <div className="flex flex-grow">
                <p className="p-10 w-2/5 flex-shrink-0 text-6xl text-indigo-900 font-bold self-center ">
                    Invest big for all
                </p>
                <div className="p-10 self-center flex-grow flex">
                    <div className="flex-grow"></div>
                    <div className="rounded-md shadow-md w-96 bg-white">
                        <div className="relative self-center">
                          <Image objectFit="contain" quality={100} src={realEstateSample} alt="Sample of a real estate project to invest in" placeholder="blur" />
                        </div>
                        <p className="self-center bg-white">Immobilier Aurora</p>
                    </div>
                    <div className="flex-grow"></div>
                </div>
            </div>
        </div>
    )
}

export default MainLandingBody;
