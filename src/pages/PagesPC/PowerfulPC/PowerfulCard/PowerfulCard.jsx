import React, { useState } from "react";
import som from "../../../../assets/images/som.svg";
import info from "../../../../assets/images/info_img.svg";
import v1 from "../../../../assets/images/v1.svg";
import v2 from "../../../../assets/images/v2.svg";
import v3 from "../../../../assets/images/v3.svg";
import v4 from "../../../../assets/images/v4.svg";
import v5 from "../../../../assets/images/v5.svg";
import v6 from "../../../../assets/images/v6.svg";
import v7 from "../../../../assets/images/v7.svg";
import v8 from "../../../../assets/images/v8.svg";
import v9 from "../../../../assets/images/v9.svg";
import v10 from "../../../../assets/images/v10.svg";
import v11 from "../../../../assets/images/v11.svg";
import { useNavigate } from "react-router-dom";
import GiTinker from "../../../../icons/GiTinker";
import GamingModal from "../../GamingPC/GamingModal/GamingModal";

const PowerfulCard = ({ product }) => {
  console.log(product);

  const about = [
    {
      img1: v1,
      p1: "Видео-карта",
      h31: "PALIT NVIDIA GЕFORCE RTX 4060 8Гб",
      img2: v2,
      p2: "Процессор",
      h32: "Intel Core i3-13100F 3300 МГц",
      img3: v3,
      p3: "Охлаждение",
      h33: "ID-COOLING SE-224-RGB",
      img4: v4,
      p4: "Оперативная память",
      h34: "16Гб DDR4 3000 МГц",
      img5: v5,
      p5: "Материнская плата",
      h35: "Gigabyte B760 DS3H D4",
      img6: v6,
      p6: "Жёсткий диск",
      h36: "не установлен",
      img7: v7,
      p7: "Диск SSD",
      h37: "480 Hewlett-Packard M.2",
      img8: v8,
      p8: "Оптический привод",
      h38: "Без привода",
      img9: v9,
      p9: "Блок питания",
      h39: "500W RaidMax",
      img10: v10,
      p10: "Корпус",
      h310: "Zalman Z7 Neo Black",
      img11: v11,
      p11: "Система",
      h311: "Windows 10",
    },
  ];
  const naviget = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="listinBlocks">
      {product.map((el) => (
        <div className="listinBoxs">
          <img src={el.image} alt="" className="PC" />
          <div className="listinTops">
            <h3>{el.title}</h3>
            <div className="price">
              <p>{el.price}</p>
              <img src={som} alt="" className="som" />
              <img src={info} alt="" className="info" />
            </div>
            <div className="btns">
              <button onClick={handleOpen}>купить</button>
              <GamingModal handleClose={handleClose} open={open} />
              <button>Подробнее</button>
              <button
                onClick={() => naviget("/configurator")}
                className="btnSetting"
              >
                <GiTinker />
              </button>
            </div>
            <p>{el.description}</p>
          </div>
          <div className="listinBottoms">
            {about.map((el) => (
              <>
                <div className="card">
                  <img src={el.img1} alt="" />
                  <div className="listinAbout">
                    <p>{el.p1}</p>
                    <h3>{el.h31}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img2} alt="" />
                  <div className="listinAbout">
                    <p>{el.p2}</p>
                    <h3>{el.h32}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img3} alt="" />
                  <div className="listinAbout">
                    <p>{el.p3}</p>
                    <h3>{el.h33}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img4} alt="" />
                  <div className="listinAbout">
                    <p>{el.p4}</p>
                    <h3>{el.h34}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img5} alt="" />
                  <div className="listinAbout">
                    <p>{el.p5}</p>
                    <h3>{el.h35}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img6} alt="" />
                  <div className="listinAbout">
                    <p>{el.p6}</p>
                    <h3>{el.h36}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img7} alt="" />
                  <div className="listinAbout">
                    <p>{el.p7}</p>
                    <h3>{el.h37}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img8} alt="" />
                  <div className="listinAbout">
                    <p>{el.p8}</p>
                    <h3>{el.h38}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img9} alt="" />
                  <div className="listinAbout">
                    <p>{el.p9}</p>
                    <h3>{el.h39}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img10} alt="" />
                  <div className="listinAbout">
                    <p>{el.p10}</p>
                    <h3>{el.h310}</h3>
                  </div>
                </div>
                <div className="card">
                  <img src={el.img11} alt="" />
                  <div className="listinAbout">
                    <p>{el.p11}</p>
                    <h3>{el.h311}</h3>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PowerfulCard;
