import React, { useEffect, useState } from "react";
import star from "../../../assets/images/star.svg.svg";
import robot from "../../../assets/images/Picture → 93e2f0a1053067ddbe3b640ea21c3668.png.png";
import imgOne from "../../../assets/images/powerful_news_img1/rtx3090-x.jpg.png";
import imgTwo from "../../../assets/images/powerful_news_img2/asusg.jpg.png";
import imgThree from "../../../assets/images/powerful_news_img3/asuspwp.jpg.png";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/images/Group 101906.png";
import dom from "../../../assets/images/icon-home.svg";
import PowerfulCard from "./PowerfulCard/PowerfulCard";
import axios from "axios";
import Paginations from "../GamingPC/Pagination/Pagination";

const Powerful = () => {
  const naviget = useNavigate();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = product.slice(firstCountryIndex, lastCountryIndex);
  const paginate = (pageNumber) => {
    console.log(currentCountry);
    setCurrentPage(pageNumber);
  };

  async function getData() {
    try {
      setLoading(true);
      await axios(
        "http://16.171.26.64/pk/?id_category=1&id_classifications=3"
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
      <div id="powerful">
        <div className="dom">
          <div className="nav">
            <img onClick={() => naviget("/")} src={dom} alt="" />
            <div className="dot"></div>
            <p>Сверхмощные компьютеры</p>
          </div>
        </div>
        <img className="bgMain" src={bg} alt="" />
        <div className="container">
          <h1>Сверхмощные компьютеры</h1>
          <p>
            Топовые ПК - самое совершенное и дорогое в мире железо.
            Оптимизированы под разрешение экрана 4K. Премиальные компьютеры для
            профессионалов, энтузиастов и создателей качественного цифрового
            контента.
          </p>
        </div>
      </div>
      <div id="inBlocks">
        <div className="container">
          <div className="inBoxs">
            <h3>Экстремальная серия - мощнейшие ПК</h3>
            <img className="robot" src={robot} alt="" />
            <div className="boxs">
              <div className="left">
                <div className="txt">
                  <img src={star} alt="" className="star" />
                  <p>
                    Высокопроизводительные системы для работы с максимально
                    возможной эффективностью
                  </p>
                </div>
              </div>
              <div className="box line">
                <div className="txt">
                  <img src={star} alt="" className="star" />
                  <p>
                    Бескомпромиссные решения для экстремалов с колоссальной
                    вычислительной скоростью
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="txt">
                  <img src={star} alt="" className="star" />
                  <p>
                    Топовые ПК для гейминга 4K+ с имбалансной конфигурацией и
                    фантастическим FPS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="listinProducts">
        <div id="powerful_bg"></div>
        <div className="container">
          <div className="listinProducts">
            <PowerfulCard product={currentCountry} loading={loading} />
          </div>
          <div className="paginations">
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
      <div id="newss">
        <div className="container">
          <div className="news">
            <div className="newsBlock">
              <div className="newsBox">
                <h3>Титаны компьютерного мира</h3>
                <p>
                  Современные игры, фото и графические редакторы требует от ЭВМ
                  колоссального вычислительного <br /> ресурса. Серия
                  экстремальных ПК в данном каталоге – это системные блоки
                  которые обладает техническим <br /> заделом на несколько лет
                  вперед.
                </p>
                <p>
                  Подобные устройства способны решить даже самые невообразимые
                  потребительские задачи сегодня и с <br /> таким же успехом
                  будут решать их завтра. Если развитие компьютерной индустрии и
                  не достигло наивысшей <br /> точки, то перешло на качественно
                  новый уровень.
                </p>
                <p>
                  Принципиальная позиция современного пользователя выглядит
                  следующим образом. Мир быстро меняется, <br /> системные
                  требования ко многим новинкам растут быстрее их выхода,
                  поэтому для идеальной рабочей среды <br /> нужны
                  высокопроизводительные компьютеры Hi End класса.
                </p>
                <p>
                  Компания EDELWEISS в своих ПК используем самые
                  высокотехнологичные решения в мире IT. Мы постоянно <br />{" "}
                  следим за основными тенденциями мирового компьютерного рынка и
                  предлагаем своим клиентам только <br /> лучшие образцы,на
                  основе самых топовых компонентов и инновационных решений.
                </p>
                <p>
                  Купить топовый ПК – это получить высочайшую производительность
                  и слаженную работу всех узлов компьютера, <br /> систему
                  способную решать сложнейшие задачи.
                </p>
              </div>
              <div className="newsImg">
                <img src={imgOne} alt="" />
              </div>
            </div>
            <div className="newsBlock">
              <div className="newsImg">
                <img src={imgTwo} alt="" />
              </div>
              <div className="newsBox">
                <h3>Процессоры и видеокарты - CPU и GPU</h3>
                <p>
                  Порог вхождения для центрального процессора - тактовая частота
                  в 5000 МГц. Новое поколения микросхем <br /> от Intel Core
                  i9-10900K и AMD RYZEN 5900 обладают уникальным быстродействием
                  и высокой оптимизацией. <br /> С таким CPU запуск и работа в
                  сложных инженерных программах будет максимально комфортной.
                </p>
                <p>
                  Другим важнейшим компонентом суперкомпьютера является
                  видеокарта GЕFORCE RTX 3090 24 Гб. В тандеме <br /> intel i9
                  или AMD Ryzen 9 эти графические адаптеры просто творят чудеса.
                </p>
                <p>
                  Картинка становится реалистичной на все сто, появляется
                  возможность без тормозов, очень плавно и <br /> качественно
                  вести стримы параллельно играя в разрешении 4К+.
                </p>
              </div>
            </div>
            <div className="newsBlock">
              <div className="newsBox">
                <h3>Продуманный интерьер премиальных ПК</h3>
                <p>
                  Оперативная память стартует от 32 лучше 64 Гб, эффективная
                  система охлаждения NZXT Kraken X73 Liquid <br />{" "}
                  Cooler,воздушка Be Quiet Dark Rock Pro 4 или Noctua NH-D15, а
                  лучше кастомный набор СВО EKWB, материнские <br /> платы типа
                  ASUS ROG GAMING или AORUS MASTER от GIGABYTE c чипсетом X299 /
                  Z490, самые скоростные SSD <br /> диски,сертифицированные
                  блоки питания класса gold и platinum прилагаются.
                </p>
                <p>
                  Мы никогда не забываем и о внешнем виде системных блоков, ведь
                  это топовые компьютеры в дорогом <br /> исполнении- монстры
                  цифрового мира! Все они оригинальны, имеют современный и, чаще
                  всего, «боевой» <br /> дизайн, который настраивает на победу. 
                </p>
                <p>
                  Купить дорогой эксклюзивный компьютер вам помогут специалисты
                  компании EDELWEISS. В магазине есть <br /> достаточное
                  количество крутейших ПК, однако мы прекрасно понимаем желание
                  каждого геймера иметь в <br /> своем арсенале уникальный во
                  всех отношениях суперкомпьютер. Поэтому каждый желающий может{" "}
                  <br />
                  персонифицировать свою сборку воспользовавшись{" "}
                  <span onClick={() => naviget("/configurator")}>
                    конфигуратором пк.
                  </span>
                </p>
              </div>
              <div className="newsImg">
                <img src={imgThree} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Powerful;
