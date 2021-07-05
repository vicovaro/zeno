import Image from 'next/image'

import realEstateSample from '../public/joel-filipe-RFDP7_80v5A-unsplash.jpg'

function MainLandingBody() {
    return (
        <div className="absolute h-4/5 flex flex-col w-full bg-gradient-to-r from-green-400 to-blue-500">
            <div className="flex flex-row flex-grow">
                <p className="p-10 w-2/5 text-6xl font-bold self-center">
                    Invest big for all
                </p>
                <div className="p-10 flex-grow">
                    <div className="flex flex-col">
                        <a className="w-96 h-80 bg-black self-center">
                            <Image width="500" height="400" src={realEstateSample} alt="Sample of a real estate to invest in" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLandingBody;
