import React from "react";
import HomeIcon from "@mui/icons-material/Home";
const AboutHeader = ({ activeSquare, back }) => {
  return (
    <div>
      {back === 1 && (
        <div className="rid">
          <div className="home_bg relative">
            <div className="container">
              <div className="flex items-center gap-4 relative z-30">
                <HomeIcon className="text-xl" />
                <h1 className="">
                  <h2 className="text-[#c5bebe99]">
                    {activeSquare === 2 ? (
                      <div
                        className="new-photo absolute inset-0"
                        style={{
                          backgroundImage: `url('../AboutUs/img/0c7b1d9c128122886140489168487a9d.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          zIndex: "0",
                        }}
                      />
                    ) : (
                      "О нас"
                    )}
                  </h2>
                </h1>
              </div>
            </div>
          </div>
          <div className="text_amin relative z-40">
            <h1>Философия гейминга от Amin store</h1>
          </div>
        </div>
      )}
      {back === 2 && (
        <div className="rid2">
          <div className="home_bg relative">
            <div className="container">
              <div className="flex items-center gap-4 relative z-30">
                <HomeIcon className="text-xl" />
                <h1 className="">
                  <h2 className="text-[#c5bebe99]">
                    {activeSquare === 2 ? (
                      <div
                        className="new-photo absolute inset-0"
                        style={{
                          backgroundImage: `url('../AboutUs/img/0c7b1d9c128122886140489168487a9d.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          zIndex: "0",
                        }}
                      />
                    ) : (
                      "О нас"
                    )}
                  </h2>
                </h1>
              </div>
            </div>
          </div>
          <div className="text_amin relative z-40">
            <h1>FAQ</h1>
          </div>
        </div>
      )}
      {back === 3 && (
        <div className="rid3">
          <div className="home_bg relative">
            <div className="container">
              <div className="flex items-center gap-4 relative z-30">
                <HomeIcon className="text-xl" />
                <h1 className="">
                  <h2 className="text-[#c5bebe99]">
                    {activeSquare === 2 ? (
                      <div
                        className="new-photo absolute inset-0"
                        style={{
                          backgroundImage: `url('../AboutUs/img/0c7b1d9c128122886140489168487a9d.png')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          zIndex: "0",
                        }}
                      />
                    ) : (
                      "О нас"
                    )}
                  </h2>
                </h1>
              </div>
            </div>
          </div>
          <div className="text_amin relative z-40">
            <h1>Отзывы клиентов</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutHeader;
