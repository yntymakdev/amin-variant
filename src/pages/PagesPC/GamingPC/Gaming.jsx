import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GamingCard from "./GamingCard/GamingCard";
import Paginations from "./Pagination/Pagination";
import star from "../../../assets/images/star.svg.svg";
import robot from "../../../assets/images/gaming_robot.png";
import imgOne from "../../../assets/images/gaming_news_img1.png";
import imgTwo from "../../../assets/images/gaming_news_img2.png";
import imgThree from "../../../assets/images/gaming_news_img3.png";
import bg from "../../../assets/images/gamingMain.png";
import dom from "../../../assets/images/icon-home.svg";
import axios from "axios";

const Gaming = () => {
  const naviget = useNavigate();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = product.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  async function getData() {
    try {
      setLoading(true);
      await axios(
        "http://16.171.26.64/pk/?id_category=1&id_classifications=2"
      ).then((res) => setProduct(res.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="gaming">
        <div className="doms">
          <div className="nav">
            <img onClick={() => naviget("/")} src={dom} alt="" />
            <div className="dot"></div>
            <p>Сверхмощные компьютеры</p>
          </div>
        </div>
        <img className="bgMain" src={bg} alt="" />
        <div className="container">
          <h1>Мощные игровые компьютеры</h1>
          <p>
            Крутые компы для геймеров и киберспортсменов. Мощные ПК 2023 года,
            надежные компоненты, брендовое и самое быстрое компьютерное железо.
            Качественная графика GEFORCE RTX, запредельный FPS, идеальный
            геймплей. Системные блоки с повышенной производительностью - лучшие
            ПК для игр!
          </p>
        </div>
      </div>
      <div id="inBlock">
        <div className="container">
          <div className="inBox">
            <h3>Продвинутая серия - игровые компьютеры</h3>
            <img className="robot" src={robot} alt="" />
            <div className="boxs">
              <div className="left">
                <div className="txt">
                  <img src={star} alt="" className="star" />
                  <p>
                    Мощные системные блоки,высокая скорость работы в играх и
                    графических программах
                  </p>
                </div>
              </div>
              <div className="box line">
                <div className="txt">
                  <img src={star} alt="" className="star" />
                  <p>
                    Возможность играть на максимальных настройках графики, в
                    проекты AAA
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="txt">
                  <img src={star} alt="" className="star" />
                  <p>
                    Качественные компаненты, классный дизайн, крутые игровые ПК
                    EDELWEISS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="listinProduct">
        <div id="gaming_bg"></div>
        <div className="container">
          <div className="listinProduct">
            <GamingCard product={currentCountry} loading={loading} />
          </div>
          <div className="pagination">
            <Paginations
              paginate={paginate}
              countriesPerPage={countriesPerPage}
              totalCountries={product.length}
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      <div id="news">
        <div className="container">
          <div className="news">
            <div className="newsBlock">
              <div className="newsImg">
                <img src={imgOne} alt="" />
              </div>
              <div className="newsBox">
                <h3
                  onClick={() => {
                    <div></div>;
                  }}
                >
                  ПК для игр и работы
                </h3>
                <p>
                  Игровые компьютеры в ценовом диапазоне от 100 тысяч рублей
                  пользуются наибольшей популярностью у наших <br /> клиентов.
                  Их технические характеристики позволяют воплощать в реальность
                  самые смелые идеи. Как правило, <br /> системные блоки из
                  продвинутой серии имеют в своем активе:
                </p>
                <p className="news_p">
                  мощный процессор – AMD Ryzen 7, Intel Core i7 или Intel Core
                  i9; <br />
                  крутую графику Nvidia – GЕFORCE RTX 3070 или GЕFORCE RTX 3080;{" "}
                  <br />
                  жесткий диск – от 2 до 8 Тб Seagate, WDC Black, Gold <br />{" "}
                  быстрые SSD диски формата NVME M.2 Samsung, Gigabyte
                </p>
                <p>
                  Представленные модели отличает боевой, даже агрессивный
                  дизайн. Корпус и RGB подсветка плюс эффективная <br /> система
                  вентиляции выполнены стильно, уникально, они ненавязчиво
                  подчеркивают высокий статус крутого <br /> геймера, а как
                  иначе это же современные Gaming PC.
                </p>
              </div>
            </div>
            <div className="newsBlock">
              <div className="newsBox">
                <h3>Больше чем мощный игровой ПК</h3>
                <p>
                  По-настоящему крутой комп должен отвечать ряду требований,
                  среди которых:
                </p>
                <p className="news_p">
                  возможность запуска любого современного проекта класса AAA
                  <br /> комфортный FPS, в том числе в разрешении 4K (более 100
                  FPS в FHD и на уровне 60‑80 в 4K) <br /> использование
                  последних технологических решений (трассировки лучей реалтайм,
                  высокое <br /> количество ядер CPU и GPU, RGB <br />{" "}
                  подсветка, DLSS рендеринг на базе ИИ, процедурная генерация
                  игрового мира) <br /> полное отсутствие микрофонов и посадки
                  частоты кадров, мешающих плавному геймплею
                </p>
                <p>
                  Чтобы системник соответствовал выше перечисленным параметрам,
                  он должен быть собран из лучших <br /> брендовых
                  комплектующих. Соблюдая данное условия мы получим мощный
                  игровой ПК с приставкой <br /> gaming который не только
                  «потянет» любую современную игру, но и будет актуален в
                  течение ближайших <br /> 3 – 4 лет.
                </p>
              </div>
              <div className="newsImg">
                <img src={imgTwo} alt="" />
              </div>
            </div>
            <div className="newsBlock">
              <div className="newsImg">
                <img src={imgThree} alt="" />
              </div>
              <div className="newsBox">
                <h3>Admin Store гарантирует</h3>
                <p>
                  Покупая классный игровой компьютер в крутой комплектации
                  будьте уверены мы предложим Вам:
                </p>
                <p className="news_p">
                  конкурентные цены и удобную для Вас форму оплаты; <br />
                  качественную сборку высококвалифицированными специалистами;{" "}
                  <br />
                  обязательное сервисное и гарантийное обслуживание;
                  <br /> установку и настройку необходимого ПО; <br /> создавать
                  и комплектовать собственные конфигурации; <br /> возможность
                  приобрести компьютер в рассрочку или кредит;
                </p>
                <p>
                  Компетентную онлайн поддержку по телефону, при необходимости
                  удаленный <br /> мониторинг через TeamViewer или другой
                  программный комплекс. Быструю <br /> реализацию заказа с
                  соблюдением всех технологических регламентов. Продажу и <br />
                  доставку в любой регион РФ. Самым требовательным клиентам мы
                  предлагаем <br /> посетить категорию{" "}
                  <span onClick={() => naviget("/powerful")}>
                    экстремальные ПК.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gaming;
