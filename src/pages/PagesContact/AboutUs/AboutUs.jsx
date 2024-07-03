import React, { useState, useEffect } from "react";
import AboutStar from "./AboutReview/AboutStar";
import ReviewForm from "./AboutReview/ReviewForm";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import { MdOutlineStarOutline } from "react-icons/md";
// import { MdOutlineStarPurple500 } from "react-icons/md";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./AboutUs.scss";
import "./AboutUsmedia.scss";
const AboutUs = ({
  userId,
  setBack,
  back,
  review,
  setReview,
  handleSubmits,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(1);
  const [isStarColored, setIsStarColored] = useState(false);
  const [mainTitle, setMainTitle] = useState("О Компании 1");
  const [company1Style, setCompany1Style] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showContent = (contentNumber, title) => {
    setSelectedContent(contentNumber);
    setMainTitle(title);
    setIsOpen(false);
    if (contentNumber === 1) {
      setCompany1Style("app");
    } else {
      setCompany1Style("");
    }
  };
  const [stars, setStars] = useState([false, false, false, false, false]);
  const handleStarClick = (index) => {
    const newStars = stars.map((star, i) => (i <= index ? true : false));
    setStars(newStars);
  };

  const [headerClass, setHeaderClass] = useState("initial-header");
  const [showText, setShowText] = useState({
    plus: !true,
    plus1: false,
    plus2: false,
    plus3: false,
    plus4: false,
    plus5: false,
    plus6: false,
    plus7: false,
    plus8: false,
    plus9: false,
    plus10: false,
    plus11: false,
    plus12: false,
    plus13: false,
    plus14: false,
    plus15: false,
    plus16: false,
    plus17: false,
    plus18: false,
    plus19: false,
    plus20: false,
    plus21: false,
    plus22: false,
  });

  // console.log("tt", showText.plus);

  const handleBlockClick = (blockNumber) => {
    if (blockNumber === 2) {
      setHeaderClass("new-header");
    }
  };
  console.log(back);

  const handleBlockClick1 = (blockNumber) => {
    if (blockNumber === 1) {
      setHeaderClass("rid");
    }
  };
  const [selectedStars, setSelectedStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [activeSquare, setActiveSquare] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://16.171.26.64/review/");
        const formattedReviews = response.data.results.map((review) => {
          const date = new Date(review.created_date);
          const formattedDate = date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          return {
            ...review,
            created_date: formattedDate,
          };
        });
        setReviews(formattedReviews);
      } catch (error) {
        alert("Error fetching reviews");
      }
    }

    getData();
  }, []);

  const handleClick = (id) => {
    setActiveSquare(id);
  };

  const handleReviewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmitReview = (review) => {
    // Обработка отправки отзыва
    setShowModal(false);
  };

  const handleTabClick = (id) => {
    handleClick(id);
    handleBlockClick(id);
  };

  const handleTabClick1 = (id) => {
    handleClick(id);
    handleBlockClick1(id);
  };

  const toggleText = (key) => {
    setShowText((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleStar = (index) => {
    const updatedStars = [...selectedStars];
    updatedStars[index] = !updatedStars[index];
    setSelectedStars(updatedStars);
  };

  const [showFirstIcon, setShowFirstIcon] = useState(true);

  const handleToggleReview = () => {
    setShowFirstIcon(!showFirstIcon);
  };
  const [activeTab, setActiveTab] = useState(1);

  const tabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div id="con">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {mainTitle} <span className="arrow">&#9660;</span>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#" onClick={() => showContent(1, "О Компании 1")}>
              О Компании 1
            </a>

            <a href="#" onClick={() => showContent(2, "О Компании 2")}>
              О Компании 2
            </a>

            <a href="#" onClick={() => showContent(3, "О Компании 3")}>
              О Компании 3
            </a>
          </div>
        )}
        {selectedContent === 1 && (
          <div className="content">
            <p>
              EDELWEISS – компьютерная студия, основанная в 2014 году командой
              единомышленников. Главное направление – производство и тюнинг
              мощных игровых компьютеров высочайшей степени сложности. За время
              существования компании мы стали официальными партнёрами самых
              известных корпораций в компьютерном бизнесе: NVIDIA, MSI,
              THERMALTAKE, ASUS, Intel и очень гордимся этим результатом.
              <br />
              <br />
              Раз Вы читаете вкладку “О компании”, то определенно интересуетесь:
              компьютерными играми; графикой и 3D моделированием; приобретением
              офисного ПК для себя или своих сотрудников. Какой бы пункт Вас не
              интересовал, компания Эдельвейс опираясь на огромный опыт и
              команду профессионалов всегда готова помочь.
            </p>
            <br />
            <br />
            <div className="imm">
              <div className="im"></div>
              <div className="im1"></div>
            </div>
            <br />
            <br />
            <div className="textSport">
              <h1>Для игроков и киберспортсменов</h1>
              <br />
              <p>
                Предположим Вы играете пару часов в день для того чтобы
                расслабится после рабочего дня, мы сможем создать для такой
                задачи сбалансированный игровой системный блок, на котором без
                проблем можно запустить World of Tanks и подбить парочку
                вражеских экипажей.
              </p>
              <br />
              <p>
                Проводите много времени в онлайн играх, например таких как:
                PUBG, CS:GO, Dota 2, Overwatch, в таком случае потребуется
                надежный и производительный ПК, достаточно тихий, чтобы шум
                системы охлаждения не мешал вам активно общаться в голосовом
                чате. Определённо важным аспектом является внешний вид игрового
                компьютера, ассортимент корпусов в нашей компании позволит
                выбрать Вам подходящий вариант по внешнему виду, цене, размерам
                и форм-фактору.
              </p>
              <br />
              <p>
                Относитесь к категории геймеров, которые не терпят компромиссов,
                запускают третью часть Ведьмака в разрешении 4К, с выкрученными
                бегунками настроек графики на уровень "ультра", ожидают выхода
                продолжения легендарного шутера Red Dead Redemption 2, тут мы
                готовы предложить вашему вниманию линейку мощнейших игровых
                компьютеров, построенных на базе топовых видеокарт GeForce RTX
                20 серии. Максимальная производительность, надежность,
                эффективное охлаждение, стильный дизайн - вот основные принципы,
                на которые опираются наши инженеры при производстве игровых ПК
                премиум класса.
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="img_sert">
              <div className="img_sert1"></div>
            </div>
            <div className="text_amin_store">
              <br />
              <br />
              <div className="text_amin_store2">
                <h1>Решения для бизнеса</h1>
              </div>
              <br />
              <div className="text_amin_store_3">
                <p>
                  Если вы работаете с такими приложениями как Coral, 3DMax,
                  Adobe, и т.п., производите тяжелые инженерные расчеты и т.п.,
                  мы поможем выбрать достойную графическую станцию, построенную
                  на базе процессоров Intel последнего поколения и
                  профессиональных видеокарт NVIDIA Quadro. С такой аппаратной
                  мощностью можно быть уверенным, что проект будет завершен в
                  срок.
                </p>
                <br />
                <p>
                  В любой компании, независимо от ее размера, всегда
                  присутствует потребность в надежных рабочих компьютерах для
                  ведения базы данных, обслуживания клиентов, доступа к
                  информационным серверам, обработки и ведения бухгалтерских
                  отчетов и множества других подобных задач. Наша компания
                  готова предложить качественные, мощные офисные компьютеры
                  линейки Edelweiss. При их создании мы стараемся использовать
                  бюджетные, проверенные и качественные модели комплектующих.
                  Поэтому не сомневайтесь в стабильности и надежности их работы.
                </p>
              </div>
            </div>
          </div>
        )}
        {selectedContent === 2 && (
          <div className="content">Содержание для Компании 2</div>
        )}
        {selectedContent === 3 && (
          <div className="content">Содержание для Компании 3</div>
        )}
      </div>{" "}
      <div className="contain container">
        <div className="con">
          <div className="tab-buttons">
            <button
              onClick={() => {
                handleTabClick1(1);
                setBack(1);
                tabClick(1);
              }}
              className={`tab-clicker ${
                activeSquare === 1 ? "custom active" : ""
              }`}
            >
              <div
                className={activeTab === 1 ? "img_tab_active" : "img_tab"}
              ></div>
              <h1>О компании</h1>
            </button>
            <button
              onClick={() => {
                handleTabClick(2);
                setBack(2);
                tabClick(2);
              }}
              className={`tab-clicker ${
                activeSquare === 2 ? "custom active" : ""
              }`}
            >
              <div
                className={
                  activeTab === 2 ? "img_tab_cub_active" : "img_tab_cub"
                }
              ></div>
              <h1>FAQ</h1>
            </button>

            <button
              onClick={() => {
                handleTabClick(3);
                setBack(3);
                tabClick(3);
              }}
              className={`tab-clicker ${
                activeSquare === 3 ? "custom active" : ""
              }`}
            >
              <div
                className={
                  activeTab === 3
                    ? "img_tab_cub_color_active"
                    : "img_tab_cub_color"
                }
              ></div>

              <h1>Отзывы</h1>
            </button>
          </div>

          <div className="tab-content">
            {activeSquare === 2 && (
              <div className="text-faqq">
                <div className="text_faq">
                  <p style={{ marginTop: "1px" }}>Вопросы по доставке</p>
                </div>
                <br />
                <div className="text_faq_ofic">
                  <div className="text_faq1">
                    <p>
                      Сколько ждать доставку если я живу в другом городе?
                      {showText.plus ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus")} />
                      )}
                    </p>
                    {showText.plus && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Как долго ждать доставку компьютера по адресу?
                      {showText.plus1 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus1")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus1")} />
                      )}
                    </p>
                    {showText.plus1 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>

                  <div className="text_faq1">
                    <p>
                      Сколько стоит доставка по бишкеку?
                      {showText.plus2 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus2")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus2")} />
                      )}
                    </p>
                    {showText.plus2 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Сколько стоит доставка до моего города?
                      {showText.plus3 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus3")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus3")} />
                      )}
                    </p>
                    {showText.plus3 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                </div>
                <br />
                <br />
                <div className="text_ofic1">
                  <div className="text_faq">
                    <p style={{ marginTop: "1px" }}>Вопросы по сборке</p>
                  </div>
                  <br />
                  <div className="text_faq1">
                    <p>
                      Могу ли я заказать компьютер с комплектующими которые не
                      представлены на вашем сайте?
                      {showText.plus4 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus4")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus4")} />
                      )}
                    </p>
                    {showText.plus4 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Компьютер будет опломбирован?
                      {showText.plus5 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus5")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus5")} />
                      )}
                    </p>
                    {showText.plus5 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Тестируете ли вы собранные компьютеры?
                      {showText.plus6 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus6")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus6")} />
                      )}
                    </p>
                    {showText.plus6 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Можно ли добавить в сборку мои комплектующие?
                      {showText.plus7 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus7")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus7")} />
                      )}
                    </p>
                    {showText.plus7 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Можно ли вносить изменения в представленные на сайте
                      конфигурации?
                      {showText.plus8 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus8")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus8")} />
                      )}
                    </p>
                    {showText.plus8 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Сколько времени занимает изготовление компьютеров
                      EDELWEISS?
                      {showText.plus9 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus9")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus9")} />
                      )}
                    </p>
                    {showText.plus9 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Если я соберу ПК в конфигураторе после оформления заказа
                      ко мне приедет уже собранный компьютер или мне нужно будет
                      его собирать самому?
                      {showText.plus10 ? (
                        <RemoveIcon
                          style={{ marginLeft: "10px" }}
                          onClick={() => toggleText("plus10")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus10")} />
                      )}
                    </p>
                    {showText.plus10 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="text_ofic2">
                  <div className="text_faq">
                    <p style={{ marginTop: "1px" }}>Вопросы по оплате</p>
                  </div>
                  <br />
                  <div className="text_faq1">
                    <p>
                      Не повредят ли мой заказ во время транспортировки?
                      {showText.plus11 ? (
                        <RemoveIcon
                          style={{ marginLeft: "11px" }}
                          onClick={() => toggleText("plus11")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus11")} />
                      )}
                    </p>
                    {showText.plus11 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Каковы гарантии что после внесения предоплаты я получу
                      свой заказ?
                      {showText.plus12 ? (
                        <RemoveIcon
                          style={{ marginLeft: "12px" }}
                          onClick={() => toggleText("plus12")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus12")} />
                      )}
                    </p>
                    {showText.plus12 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Нужно ли мне вносить предоплату если я заказываю компьютер
                      с доставкой по Кыргызстану?
                      {showText.plus13 ? (
                        <RemoveIcon
                          style={{ marginLeft: "13px" }}
                          onClick={() => toggleText("plus13")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus13")} />
                      )}
                    </p>
                    {showText.plus13 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Нужно ли мне вносить предоплату если я заказываю компьютер
                      в Бишкекке ?
                      {showText.plus14 ? (
                        <RemoveIcon
                          style={{ marginLeft: "14px" }}
                          onClick={() => toggleText("plus14")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus14")} />
                      )}
                    </p>
                    {showText.plus14 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Как я могу оплатить свой заказ?
                      {showText.plus15 ? (
                        <RemoveIcon
                          style={{ marginLeft: "15px" }}
                          onClick={() => toggleText("plus15")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus15")} />
                      )}
                    </p>
                    {showText.plus15 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                </div>
                <br />
                <br />
                <div className="text_ofic3">
                  <div className="text_faq">
                    <p style={{ marginTop: "1px" }}>Вопросы по гарантии</p>
                  </div>
                  <br />
                  <div className="text_faq1">
                    <p>
                      Можете ли вы приехать ко мне домой/работу и устранить
                      неисправность?
                      {showText.plus16 ? (
                        <RemoveIcon
                          style={{ marginLeft: "16px" }}
                          onClick={() => toggleText("plus16")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus16")} />
                      )}
                    </p>
                    {showText.plus16 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Сколько времени уходит на решение проблемы в случае
                      возникновения гарантийного случая?
                      {showText.plus17 ? (
                        <RemoveIcon
                          style={{ marginLeft: "17px" }}
                          onClick={() => toggleText("plus17")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus17")} />
                      )}
                    </p>
                    {showText.plus17 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Какая гарантия дается на компьютеры?
                      {showText.plus18 ? (
                        <RemoveIcon
                          style={{ marginLeft: "18px" }}
                          onClick={() => toggleText("plus18")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus18")} />
                      )}
                    </p>
                    {showText.plus18 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                </div>
                <br />
                <br />
                <div className="text_ofic4">
                  <div className="text_faq">
                    <p style={{ marginTop: "1px" }}>Вопросы по кредиту</p>
                  </div>
                  <br />
                  <div className="text_faq1">
                    <p>
                      Как узнать одобрили ли мне кредит?
                      {showText.plus19 ? (
                        <RemoveIcon
                          style={{ marginLeft: "19px" }}
                          onClick={() => toggleText("plus19")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus19")} />
                      )}
                    </p>
                    {showText.plus19 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Какой будет ежемесячный платеж?
                      {showText.plus20 ? (
                        <RemoveIcon
                          style={{ marginLeft: "20px" }}
                          onClick={() => toggleText("plus20")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus20")} />
                      )}
                    </p>
                    {showText.plus20 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Для оформления кредита мне нужно приезжать в ваш магазин?
                      {showText.plus21 ? (
                        <RemoveIcon
                          style={{ marginLeft: "21px" }}
                          onClick={() => toggleText("plus21")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus21")} />
                      )}
                    </p>
                    {showText.plus21 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                  <div className="text_faq1">
                    <p>
                      Можно ли купить компьютер в кредит?
                      {showText.plus22 ? (
                        <RemoveIcon
                          style={{ marginLeft: "22px" }}
                          onClick={() => toggleText("plus22")}
                        />
                      ) : (
                        <AddIcon onClick={() => toggleText("plus22")} />
                      )}
                    </p>
                    {showText.plus22 && (
                      <h6>Дополнительная информация о доставке...</h6>
                    )}
                  </div>
                </div>
              </div>
            )}
            {activeSquare === 3 && (
              <div className="otzyw_1" style={{ marginTop: "50px" }}>
                {!showModal && (
                  <button className="btn_review" onClick={handleReviewClick}>
                    Оставить отзыв
                  </button>
                )}
                {showModal && (
                  <div className="modal" onClick={handleCloseModal}>
                    <div
                      className="modal-content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="close" onClick={handleCloseModal}>
                        &times;
                      </span>
                      <div className="txt_review">
                        <h2>Что вы думаете?</h2>
                        <p>Пожалуйста, дайте свою оценку</p>
                      </div>
                      <div className="star_icon">
                        {stars.map((isStarred, index) => (
                          <div
                            key={index}
                            onClick={() => handleStarClick(index)}
                          >
                            {isStarred ? (
                              <StarRateIcon className="star_click_blue" />
                            ) : (
                              <StarOutlineIcon className="star" />
                            )}
                          </div>
                        ))}
                      </div>

                      <ReviewForm
                        userId={userId}
                        onSubmit={handleSubmitReview}
                      />
                    </div>
                  </div>
                )}

                <br />
                <br />

                <div className="container_he">
                  <div className="block-3">
                    <AboutStar reviews={reviews} />
                    <div className="text_review">
                      {reviews.map((el) => (
                        <>
                          <div className="new_rev">
                            <div className="new_us">
                              <p> {el.user}</p>
                            </div>
                            <br />
                            <p> {el.rating}</p>
                            <br />
                            <h1 key={el.id}>{el.comment}</h1>
                            <br />

                            <p>{el.created_date}</p>
                            <br />
                            <br />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <br />
              </div>
            )}
            {activeSquare === 1 && (
              <>
                <div className="text_comp">
                  <p>
                    EDELWEISS – компьютерная студия, основанная в 2014 году
                    командой единомышленников. Главное направление –
                    производство и тюнинг мощных игровых компьютеров высочайшей
                    степени сложности. За время существования компании мы стали
                    официальными партнёрами самых известных корпораций в
                    компьютерном бизнесе: NVIDIA, MSI, THERMALTAKE, ASUS, Intel
                    и очень гордимся этим результатом.
                    <br />
                    <br />
                    Раз Вы читаете вкладку “О компании”, то определенно
                    интересуетесь: компьютерными играми; графикой и 3D
                    моделированием; приобретением офисного ПК для себя или своих
                    сотрудников. Какой бы пункт Вас не интересовал, компания
                    Эдельвейс опираясь на огромный опыт и команду профессионалов
                    всегда готова помочь.
                  </p>
                </div>

                <br />
                <br />
                <div className="imm">
                  <div className="im"></div>
                  <div className="im1"></div>
                </div>
                <br />
                <br />
                <div className="textSport">
                  <h1>Для игроков и киберспортсменов</h1>
                  <br />
                  <p>
                    Предположим Вы играете пару часов в день для того чтобы
                    расслабится после рабочего дня, мы сможем создать для такой
                    задачи сбалансированный игровой системный блок, на котором
                    без проблем можно запустить World of Tanks и подбить парочку
                    вражеских экипажей.
                  </p>
                  <br />
                  <p>
                    Проводите много времени в онлайн играх, например таких как:
                    PUBG, CS:GO, Dota 2, Overwatch, в таком случае потребуется
                    надежный и производительный ПК, достаточно тихий, чтобы шум
                    системы охлаждения не мешал вам активно общаться в голосовом
                    чате. Определённо важным аспектом является внешний вид
                    игрового компьютера, ассортимент корпусов в нашей компании
                    позволит выбрать Вам подходящий вариант по внешнему виду,
                    цене, размерам и форм-фактору.
                  </p>
                  <br />
                  <p>
                    Относитесь к категории геймеров, которые не терпят
                    компромиссов, запускают третью часть Ведьмака в разрешении
                    4К, с выкрученными бегунками настроек графики на уровень
                    "ультра", ожидают выхода продолжения легендарного шутера Red
                    Dead Redemption 2, тут мы готовы предложить вашему вниманию
                    линейку мощнейших игровых компьютеров, построенных на базе
                    топовых видеокарт GeForce RTX 20 серии. Максимальная
                    производительность, надежность, эффективное охлаждение,
                    стильный дизайн - вот основные принципы, на которые
                    опираются наши инженеры при производстве игровых ПК премиум
                    класса.
                  </p>
                </div>
                <br />
                <div className="img_sert">
                  <div className="img_sert1"></div>
                </div>
                <div className="text_amin_store">
                  <div className="text_amin_store2">
                    <h1>Решения для бизнеса</h1>
                  </div>
                  <br />
                  <div className="text_amin_store_3">
                    <p>
                      Если вы работаете с такими приложениями как Coral, 3DMax,
                      Adobe, и т.п., производите тяжелые инженерные расчеты и
                      т.п., мы поможем выбрать достойную графическую станцию,
                      построенную на базе процессоров Intel последнего поколения
                      и профессиональных видеокарт NVIDIA Quadro. С такой
                      аппаратной мощностью можно быть уверенным, что проект
                      будет завершен в срок.
                    </p>
                    <br />
                    <p>
                      В любой компании, независимо от ее размера, всегда
                      присутствует потребность в надежных рабочих компьютерах
                      для ведения базы данных, обслуживания клиентов, доступа к
                      информационным серверам, обработки и ведения бухгалтерских
                      отчетов и множества других подобных задач. Наша компания
                      готова предложить качественные, мощные офисные компьютеры
                      линейки Edelweiss. При их создании мы стараемся
                      использовать бюджетные, проверенные и качественные модели
                      комплектующих. Поэтому не сомневайтесь в стабильности и
                      надежности их работы.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
