import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import HeaderLoader from "../../components/loaders/HeaderLoader";

const Heading = () => {
  const { data,isLoading } = useSelector((store) => store);
  const { iso } = useParams();
  
  const cn = (data?.data.data[0]?.name);
  const flag = `https://flagsapi.com/${iso}/flat/64.png`;
  const [isFlagError, setIsFlagError] = useState(false); // Görsel hatasını takip etmek için state

  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="bg-gray-400 py-2 px-2 pe-3 rounded-md hover:bg-gray-500 flex gap-2 items-center shadow"
      >
        <MdKeyboardArrowLeft className="text-2xl" />
        Geri
      </Link>

      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold font-sans">
            {cn}
            </h1>
            {!isFlagError ? (
              <img
                className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] w-[64px] h-[64px]"
                src={flag}
                alt="flag"
                onError={() => setIsFlagError(true)} // Hata durumunda state'i değiştir
              />
            ) : (
              <p>{iso}</p> // Eğer görsel yüklenemezse iso yazdır
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Heading;
