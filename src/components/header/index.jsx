import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import { PiVirus } from "react-icons/pi";

const Header = () => {
  return (
    <div className="border-b border-gray-600 bg-blue-900 text-white">
      <Container desings="flex justify-between items-center">
        <Link to="/" className="flex gap-3 items-center">
          <PiVirus className="text-4xl text-pink-600" />
          <span className="font-semibold">Covid-19</span>
        </Link>

        <nav className="flex gap-4">
          <a href="#">Anasayfa</a>
          <a href="#">Sonuçlarımız</a>
          <a href="#" className="max-md:hidden">
            Hakkımızda
          </a>
          <a href="#" className="max-md:hidden">
            İletişim
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
