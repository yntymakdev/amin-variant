import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import basketLogo from "../../images/basket-icon.svg";
import basketFon from "../../images/fon-basket.jpg";
import basketShadow from "../../images/shadow-basket.png";
import basketDataIcon from "../../images/basket-data-icon.svg";
import basketOrderIcon from "../../images/order-icon.svg";
import znak from "../../images/znak.svg";
import delet from "../../images/delete.svg";
import orderBox from "../../images/order-box.svg";
import orderArrow from "../../images/order-arrow.svg";
import support from "../../images/tabbar1.png";
import axios from "axios";
import Cookies from "js-cookie";
import "./Basket.scss";
import "./BasketMedia.scss";

const Basket = () => {
  const [basketOrOrder, setBasketOrOrder] = useState("basket");
  const [totalPrice, setTotalPrice] = useState(0);
  const [pcProducts, setPcProducts] = useState([]);

  const dataOrder = [
    [
      {
        name: "EDELWEISS HUNTER",
        image:
          "https://s3-alpha-sig.figma.com/img/88c5/af75/10d41cf0778b9429e278d31e1e907776?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMDPmrbd5r0bO9bNEJio95Ei96QqzxQgsvhJufs9CrxiLqh1TWIraIes3nHjnRNxcasju8p~5w9s3-uHhD3P4SnFLTGIZWLY84QgG12OtIE1Hg7m3CR6TytDc3mQHWHNdZNPl~BFsew1Z1uqXYqCVX2k92NxMmnFDuS7paHAMd7YcvhULETB4mHuyz0VhlhcpA01SaGFtcO5Rpf1YASYR1GAMsAOY8jahcP23RtIgr2QrkrwP0i0Cwv7U6Bzu-BGPhuAMusu6NLY7MODfkqGJtqFOf8B4~sC3rKM-tx5o81Vh-9kskTbaz7pLecg8gX40yleYOybEeotnfjBgzYr8g__",
        date: new Date(),
        price: 54300,
        count: 3,
        userId: "Заказ #1234567890",
      },
      {
        name: "EDELWEISS HUNTER WHITE",
        image:
          "https://s3-alpha-sig.figma.com/img/ff6c/9928/7e84e9fa7236584e3eaeaf34cacf5702?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GIMk7~fpEnXRI1rgqph80LSK3ILQ-xmigAQpMdW3~qtCMQ9qN6UPGR~tXUfWMDgeGikaRfmvElq3K4DvPa0vfGWJOy41Ec4V5qA6Q8lHiw-hYwKGWOC~4LysU-z1gEsUWw9rijyVR-S62WuvHeitJ-NcTpplip0lX3aewk8Fc1oZ35GKFAGq96WtbSWfxe3i7k~RZFoNAmZrtFJdbeVduufzk97LvRfaF5vj4aSNe0J8uYTsb1SVJElFoCdP6LunS65KtiKyyPGxnQMjRtcY68mx5HaNhDzSu2~cZw8z~~fqGUIJi0WP0hWMM6qGSB3laTPoOEhUCNaMD2bXSb1gtw__",
        date: new Date(),
        price: 52300,
        count: 2,
        userId: "Заказ #1234567890",
      },
    ],
    [
      {
        name: "EDELWEISS HUNTER",
        image:
          "https://s3-alpha-sig.figma.com/img/88c5/af75/10d41cf0778b9429e278d31e1e907776?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMDPmrbd5r0bO9bNEJio95Ei96QqzxQgsvhJufs9CrxiLqh1TWIraIes3nHjnRNxcasju8p~5w9s3-uHhD3P4SnFLTGIZWLY84QgG12OtIE1Hg7m3CR6TytDc3mQHWHNdZNPl~BFsew1Z1uqXYqCVX2k92NxMmnFDuS7paHAMd7YcvhULETB4mHuyz0VhlhcpA01SaGFtcO5Rpf1YASYR1GAMsAOY8jahcP23RtIgr2QrkrwP0i0Cwv7U6Bzu-BGPhuAMusu6NLY7MODfkqGJtqFOf8B4~sC3rKM-tx5o81Vh-9kskTbaz7pLecg8gX40yleYOybEeotnfjBgzYr8g__",
        date: new Date(),
        price: 54300,
        count: 3,
        userId: "Заказ #1234567890",
      },
      {
        name: "EDELWEISS HUNTER WHITE",
        image:
          "https://s3-alpha-sig.figma.com/img/ff6c/9928/7e84e9fa7236584e3eaeaf34cacf5702?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GIMk7~fpEnXRI1rgqph80LSK3ILQ-xmigAQpMdW3~qtCMQ9qN6UPGR~tXUfWMDgeGikaRfmvElq3K4DvPa0vfGWJOy41Ec4V5qA6Q8lHiw-hYwKGWOC~4LysU-z1gEsUWw9rijyVR-S62WuvHeitJ-NcTpplip0lX3aewk8Fc1oZ35GKFAGq96WtbSWfxe3i7k~RZFoNAmZrtFJdbeVduufzk97LvRfaF5vj4aSNe0J8uYTsb1SVJElFoCdP6LunS65KtiKyyPGxnQMjRtcY68mx5HaNhDzSu2~cZw8z~~fqGUIJi0WP0hWMM6qGSB3laTPoOEhUCNaMD2bXSb1gtw__",
        date: new Date(),
        price: 52300,
        count: 2,
        userId: "Заказ #1234567890",
      },
      {
        name: "EDELWEISS HUNTER WHITE",
        image:
          "https://s3-alpha-sig.figma.com/img/ff6c/9928/7e84e9fa7236584e3eaeaf34cacf5702?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GIMk7~fpEnXRI1rgqph80LSK3ILQ-xmigAQpMdW3~qtCMQ9qN6UPGR~tXUfWMDgeGikaRfmvElq3K4DvPa0vfGWJOy41Ec4V5qA6Q8lHiw-hYwKGWOC~4LysU-z1gEsUWw9rijyVR-S62WuvHeitJ-NcTpplip0lX3aewk8Fc1oZ35GKFAGq96WtbSWfxe3i7k~RZFoNAmZrtFJdbeVduufzk97LvRfaF5vj4aSNe0J8uYTsb1SVJElFoCdP6LunS65KtiKyyPGxnQMjRtcY68mx5HaNhDzSu2~cZw8z~~fqGUIJi0WP0hWMM6qGSB3laTPoOEhUCNaMD2bXSb1gtw__",
        date: new Date(),
        price: 52300,
        count: 2,
        userId: "Заказ #1234567890",
      },
    ],
  ];
  const navigate = useNavigate();

  function getData() {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    setPcProducts(data);
  }
  async function getOrder() {
    const token = Cookies.get("authToken");
    if (!token) {
      console.error("No authentication token found");
      return;
    }
    try {
      const { data } = await axios.get("http://16.171.26.64/orderForm/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          user: 63,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function combinePrice() {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    let price = 0;
    data.forEach((el) => {
      price += el.price * el.count;
    });
    setTotalPrice(price);
  }

  function deletPcProduct(id) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    data = data.filter((el) => el.id !== id);
    localStorage.setItem("basket", JSON.stringify(data));
    getData();
  }

  function plusPcProduct(id) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    data.map((el) => {
      if (el.id === id) {
        el.count += 1;
      }
    });
    localStorage.setItem("basket", JSON.stringify(data));
    getData();
    combinePrice();
  }

  function minusPcProduct(id) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    data.map((el) => {
      if (el.id === id) {
        return el.count > 1 ? (el.count -= 1) : el.count;
      }
    });
    localStorage.setItem("basket", JSON.stringify(data));
    getData();
    combinePrice();
  }

  useEffect(() => {
    combinePrice();
    getData();
    getOrder();
  }, []);
  return (
    <div>
      <section id="navigation-menu">
        <div className="navigation-menu">
          <img src={basketLogo} alt="" />
          <h5>Корзина</h5>
        </div>
      </section>
      {pcProducts.length > 0 ? (
        <section id="basket-products">
          <img className="fon" src={basketFon} alt="" />
          <img className="fon" src={basketShadow} alt="" />
          <div className="basket-products">
            <h1>Корзина</h1>
            <div className="basket-data-order">
              <div
                onClick={() => {
                  setBasketOrOrder("basket");
                }}
                style={{
                  background: basketOrOrder === "basket" ? "#2b333e" : "",
                  borderTop:
                    basketOrOrder === "basket" ? "3px solid #49DCFF" : "",
                }}
              >
                <img src={basketDataIcon} alt="" />
                <h4>Корзина</h4>
              </div>
              <div
                onClick={() => {
                  setBasketOrOrder("order");
                }}
                style={{
                  background: basketOrOrder === "order" ? "#2b333e" : "",
                  borderTop:
                    basketOrOrder === "order" ? "3px solid #49DCFF" : "",
                }}
              >
                <img src={basketOrderIcon} alt="" />
                <h4>Заказы</h4>
              </div>
            </div>
          </div>
          <div className="container">
            {basketOrOrder === "basket" ? (
              <div className="basket-display-blocks">
                {pcProducts.map((data) => (
                  <div className="full-block" key={data.id}>
                    <div className="basket-display-block">
                      <div className="photo">
                        <img
                          src="https://freepngimg.com/thumb/categories/673.png"
                          alt=""
                        />
                      </div>
                      <div className="name-plot">
                        <h2>{data.name}HUNTER</h2>
                        <p>
                          {data.plot} HUNTER - недорогой компьютер для игр.
                          Прекрасно справляется с CS:GO, Dota 2, Fortnite,
                          Minecraft   и другим современными игровыми
                          приложениями, показывая достаточно высоким показатели
                          FPS. Прекрасный помощник в учебе для школьника.
                        </p>
                      </div>
                      <div className="price-buy-quintity">
                        <div className="quintity">
                          <button
                            className="minus"
                            onClick={() => {
                              minusPcProduct(data.id);
                              combinePrice();
                            }}
                          >
                            <p>-</p>
                          </button>
                          <div></div>
                          <p>{data.count}</p>
                          <div></div>
                          <button
                            onClick={() => {
                              plusPcProduct(data.id);
                              combinePrice();
                            }}
                          >
                            +
                          </button>
                          <div
                            onClick={() => navigate("/configurator")}
                            className="sup"
                          >
                            <img src={support} alt="" />
                          </div>
                        </div>
                        <div className="price-buy">
                          <div className="all-price">
                            <div className="price">
                              <CountUp
                                className="count-Up-Price"
                                start={data.price / 1.5}
                                preserveValue={true}
                                end={data.price * data.count}
                                duration={1.5}
                                separator=","
                              ></CountUp>
                              <span className="span">c</span>
                            </div>
                          </div>
                        </div>
                        <div className="support">
                          <button onClick={() => navigate("/configurator")}>
                            изменить конфигурацию
                          </button>
                          <button>помощь специалиста</button>
                        </div>
                      </div>
                      <span>
                        <img
                          onClick={() => deletPcProduct(data.id)}
                          className="delet"
                          src={delet}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="linia"></div>
                  </div>
                ))}
                <div id="basket-total-price">
                  <div className="basket-total-price">
                    <div className="quintity">
                      <h2>Товары, {pcProducts.length} шт</h2>
                      <h1>Итого</h1>
                    </div>
                    <div className="price">
                      <div>
                        <CountUp
                          className="h1-con"
                          start={totalPrice / 1.2}
                          end={totalPrice}
                          duration={1.5}
                          separator=","
                        ></CountUp>{" "}
                        <span className="span">c</span>
                      </div>
                      <p>
                        от
                        <CountUp
                          style={{ marginInline: "5px" }}
                          start={totalPrice / 11}
                          end={totalPrice / 10}
                          duration={1.5}
                          separator=","
                        ></CountUp>
                        сомов в месяц
                        <img src={znak} alt="" />
                      </p>
                    </div>
                  </div>
                  <button onClick={() => navigate("/pay")}>
                    Оформить заказ
                  </button>
                </div>
              </div>
            ) : (
              <div id="order-display-blocks">
                {dataOrder.map((el, idx) => (
                  <div className="order-display-block" key={idx}>
                    <div className="order-icon-box">
                      <img src={orderBox} alt="" />
                    </div>
                    <div className="order-data-product">
                      <h1>{el[0].userId}</h1>
                      <h3>Товары {el.length} шт</h3>
                      <div className="date">
                        <h4>Доставка</h4>
                        <p>{`${
                          el[0].date.getDate() > 9
                            ? el[0].date.getDate()
                            : "0" + el[0].date.getDate()
                        }.${
                          el[0].date.getMonth() + 1 > 9
                            ? el[0].date.getMonth() + 1
                            : "0" + (el[0].date.getMonth() + 1)
                        }.${el[0].date.getFullYear()}`}</p>
                      </div>
                    </div>
                    <div className="price-products">
                      <button>
                        <img className="arrow" src={orderArrow} alt="" />
                        <div className="modalPc" tabIndex="0">
                          {el.map((item, index) => (
                            <>
                              <div className="modalPcBlocks" key={index}>
                                <div className="block-1">
                                  <img src={item.image} alt="" />
                                  <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.count} шт</p>
                                    <h2>{item.price} с</h2>
                                  </div>
                                </div>
                              </div>
                              <div className="linia"></div>
                            </>
                          ))}
                        </div>
                      </button>
                      <div className="price">
                        <h2>Итого</h2>
                        <h1>
                          {el.reduce((acc, item) => acc + item.price, 0)}
                          <span>c</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section id="basket-products-empty">
          <img className="fon" src={basketFon} alt="" />
          <img className="fon" src={basketShadow} alt="" />
          <div className="basket-products">
            <h1
              onClick={() => {
                let data = JSON.parse(localStorage.getItem("basket")) || [];
                let obj = {
                  name: "RTX 3640 PC",
                  price: 54000,
                  id: Date.now(),
                  count: 1,
                };
                data.push(obj);
                localStorage.setItem("basket", JSON.stringify(data));
              }}
            >
              Корзина
            </h1>
            <h4>
              Посмотрите предложения на главной странице или перейдите в <br />
              конфигуратор ПК
            </h4>
            <h3>Ваша корзина пустая</h3>
          </div>
        </section>
      )}
    </div>
  );
};

export default Basket;
