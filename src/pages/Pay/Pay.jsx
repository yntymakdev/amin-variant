import React, { useState } from "react";
import basketFon from "../../images/fon-basket.jpg";
import basketShadow from "../../images/shadow-basket.png";
import vosklZnak from "../../images/order-znak-input.svg";
import checkIcon from "../../images/check-icon.svg";
import orderArrow from "../../images/order-arrow.svg";
import checkSquare from "../../images/check-square.svg";
import MBank from "../../images/image-MBank.svg";
import OptimaBank from "../../images/image-OptimaBank.svg";
import X from "../../images/delete.svg";
import kyrgyzLogo from "../../images/kyrgyzLogo.png";
import "./Pay.scss";
import "./PayMedia.scss";
const Pay = () => {
  const [radioInput, setRadioInput] = useState("");
  const [delivery, setDelivery] = useState("");
  const [selectOblast, setSelectOblast] = useState(false);
  const [modalPay, setModalPay] = useState("");
  return (
    <div id="pay-products">
      <div>
        <img className="fon" src={basketFon} alt="" />
        <img className="fon" src={basketShadow} alt="" />
        <div className="basket-products">
          <h1>Оформление заказа</h1>
        </div>
      </div>
      <div
        style={{
          filter: modalPay != "" ? "blur(6px)" : "",
        }}
        className="pay-part"
      > 
        <div className="personal-data">
          <h1>Личные данные</h1>
          <p>Ваше полное имя</p>
          <div className="input-data">
            <input type="text" />
            <img src={vosklZnak} alt="" />
          </div>
          <p>E-mail</p>
          <div className="input-data">
            <input type="email" />
            <img src={vosklZnak} alt="" />
          </div>
          <p>Телефон</p>
          <div className="input-data">
            <input placeholder="" type="number" inputMode="numeric" />
            <img src={vosklZnak} alt="" />
          </div>
          <div className="input-radios">
            <label onClick={() => setDelivery("delivery")}>
              <input type="radio" name="category" />
              Доставка по Кыргызстану
            </label>
            <div
              style={{ display: delivery == "delivery" ? "block" : "none" }}
              className="modalLocal"
            >
              <p>Область</p>
              <div
                onClick={() => setSelectOblast(!selectOblast)}
                className="select-oblast"
              >
                <select>
                  <option value=""></option>
                  <option value="">Чуй</option>
                  <option value="">Талас</option>
                  <option value="">Ыссык-Куль</option>
                  <option value="">Нарын</option>
                  <option value="">Жалал-Абад</option>
                  <option value="">Ош</option>
                  <option value="">Баткен</option>
                </select>
                <img
                  style={{ transform: selectOblast ? "rotate(180deg)" : "" }}
                  src={orderArrow}
                  alt=""
                />
              </div>
              <p>Адрес</p>
              <div className="input-data">
                <input placeholder="" type="text" inputMode="numeric" />
                <img src={vosklZnak} alt="" />
              </div>
              <p>Дата доставки</p>
              <div className="date">
                <input type="date" />
              </div>
            </div>
            <label onClick={() => setDelivery("pickup")}>
              <input type="radio" name="category" />
              Самовывоз
            </label>
            <div
              className="pickup"
              style={{ display: delivery == "pickup" ? "block" : "none" }}
            >
              <h2>
                г. Бишкек, Буденного 138/1 <br /> Токтогула 211
              </h2>
              <p>
                Обработка и прием заказов по <br /> телефону:
              </p>
              <p className="number">+ 996 700 99 19 23</p>
              <p>Пн-Пт: 09:00 - 20:00</p>
              <p>Сб-Вс: 09:00 - 20:00</p>
            </div>
          </div>
          <div className="necessarily">
            <img src={vosklZnak} alt="" />
            -Поля обьязательны для заполнения
          </div>
        </div>
        <div className="pay">
          <h1>Оплата</h1>
          <p>Оплата</p>
          <div className="input-radios">
            <label
              className={radioInput == "design" ? "checked" : ""}
              onClick={() => {
                setRadioInput("design");
                setModalPay("design");
              }}
            >
              <input type="radio" name="category" />
              Оформить в рассрочку
            </label>
            <label className={radioInput == "payCash" ? "checked" : ""}>
              <input type="radio" name="category" />
              Оплата наличными
            </label>
            <label
              className={radioInput == "payNumber" ? "checked" : ""}
              onClick={() => {
                setRadioInput("payNumber");
                setModalPay("modalNumber");
              }}
            >
              <input type="radio" name="category" />
              Перевод по номеру
            </label>
            <label>
              <input type="file" />
              <img src={checkIcon} alt="" />
              Вы можете прикрепить чек
            </label>
          </div>
          <p>Комментарий к заказу</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <textarea className="plot"></textarea>
            <label className="agree">
              <input type="checkbox" /> Я согласен на обработку персональных
              данных
            </label>
          </div>
        </div>
      </div>
      <h2
        style={{
          filter: modalPay != "" ? "blur(6px)" : "",
        }}
        className="pay-price"
      >
        Всего к оплате 54 000 <span>c</span>
      </h2>
      <div className="pay-button">
        <button>Оформить заказ</button>
        <p>После оформления с вами свяжется оператор для уточнения деталей</p>
      </div>
      <div
        style={{ transform: modalPay == "design" ? "scale(1)" : "scale(0)" }}
        className="modal-installment"
      >
        <img src={X} alt="" className="close" onClick={() => setModalPay("")} />
        <div className="variants">
          <div>
            <h2>1</h2>
            <h1>БЕЗ БАНКА НА 3 МЕСЯЦА</h1>
          </div>
          <p>Требуются:</p>
          <ul>
            <li>
              <div></div>Паспорт
            </li>
            <li>
              <div></div>Первоначальный взнос 40%
            </li>
            <li>
              <div></div>Возраст 21 лет и выше
            </li>
            <li>
              <div></div>До 3 месяцев
            </li>
          </ul>
        </div>
        <div className="variants">
          <div>
            <h2>2</h2>
            <h1>БЕЗ ВЗНОСА, БЕЗ СПРАВКИ ДО 18 месяцев</h1>
          </div>
          <p>Требуются:</p>
          <ul>
            <li>
              <div></div>Паспорт
            </li>
            <li>
              <div></div>Работающие человек
            </li>
            <li>
              <div></div>ВОЗРАСТ 18 лет и выше
            </li>
            <li>
              <div></div>до 22 года нужен разрешение родителей
            </li>
          </ul>
        </div>
        <div className="variants">
          <div>
            <h2>3</h2>
            <h1>
              ДЛЯ УЧИТЕЛЕЙ И ГОС СЛУЖБЫ БЕЗ ВЗНОСА, <br /> ЕСЛИ ЕСТЬ ВЗНОС ТОГДА
              НАЦЕНКА НИЖЕ БУДЕТ
            </h1>
          </div>
          <p>Требуются:</p>
          <ul>
            <li>
              <div></div>Паспорт
            </li>
            <li>
              <div></div>Справка о доходах (для учителей не надо)Или патент
              последний 3 месяцев
            </li>
            <li>
              <div></div>До 24 месяцев без взноса
            </li>
            <li>
              <img src={checkSquare} alt="" />
              На 2 и 3 вариант нужен чистая кредитная история
            </li>
            <li>
              <img src={checkSquare} alt="" />
              На 1-й вариант не нужен
            </li>
            <li>
              <img src={checkSquare} alt="" />
              Для 1 го варианта нужен прописка: чуй или Нарын, Талас, Ыссык кол,
              Джалал абад
            </li>
          </ul>
        </div>
      </div>
      <div
        id="modalNumber"
        style={{
          transform: modalPay == "modalNumber" ? "scale(1)" : "scale(0)",
        }}
      >
        <img src={X} alt="" onClick={() => setModalPay("")} />
        <div className="modalNumber">
          <div className="Banks">
            <img src={MBank} alt="" />
            <img src={OptimaBank} alt="" />
          </div>
          <p>Вы можете перевести оплату по этому номеру телефона.</p>
          <div className="numberUser">
            <div>
              <img src={kyrgyzLogo} alt="" /> +996
            </div>
            <input type="number" />
          </div>
          <p>Асанов Турар</p>
        </div>
      </div>
    </div>
  );
};

export default Pay;
