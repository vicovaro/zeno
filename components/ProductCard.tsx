import Image from "next/image";

import realEstateSample from "@public/pexels-pixabay-534220.jpg";

function ProductCard() {
  return (
    <div className="w-96 relative rounded self-center shadow-xl">
      <Image
        className="rounded-lg"
        objectFit="contain"
        quality={100}
        src={realEstateSample}
        alt="Sample of a real estate project to invest in"
        placeholder="blur"
      />
      {/* Leave break-words as a safety mechanism if css fails somehow */}
      <div className="break-words rounded-lg p-2 text-xl bg-white">
        <p className="font-bold">Ahuntsic, QC</p>
        <p className="line-clamp-2">
          Projet de développement social de 200 appartements avec le financement
          de la BDC.
        </p>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
            <div
              style={{ width: "30%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blueGray-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
