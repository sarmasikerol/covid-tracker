import React from "react";
import { PiVirus } from "react-icons/pi";

const HomeLoader = () => {
  return (
    <div data-testid="loader" className="flex justify-center col-span-3">
      <PiVirus
        className={`text-green-500 text-2xl md:text-5xl scale-[1.4] animate-spin`}
      />
    </div>
  );
};

export default HomeLoader;
