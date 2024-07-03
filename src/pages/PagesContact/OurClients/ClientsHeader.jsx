import React from "react";
import { IoMdHome } from "react-icons/io";

const ClientsHeader = () => {
  return (
    <div className="clients">
      <div className="home_bg">
        <div className="container">
          <div className="">
            <div className="flex items-center gap-4 relative z-30">
              <IoMdHome className="text-xl" />
              <h1 className="">
                <h2 className="text-[#c5bebe99]"></h2>
              </h1>
              <div className="text_amin_clients">Условия доставки и оплаты</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsHeader;
