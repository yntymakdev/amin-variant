import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1023);
    window.addEventListener("resize", handleResize);
    handleResize();
    return window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[100px] bg-[#1C232E]">
      <div className="container">
        {!isMobile && (
          <div className="flex items-center justify-end gap-11 h-[100px] text-[#49DCFF] font-[500]">
            <NavLink to={"/configurator"}>Конфигуратор ПК</NavLink>
            <NavLink to={"/"}>Недорогие ПК</NavLink>
            <NavLink to={"/gaming"}>Игровые ПК</NavLink>
            <NavLink to={"/powerful"}>Мощнейшие ПК</NavLink>
            <NavLink to={"/pkamd"}>ПК на базе AMD</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
