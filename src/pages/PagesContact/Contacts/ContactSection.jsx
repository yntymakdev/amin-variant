import React from "react";

const ContactSection = () => {
  // Функция для прокладки маршрута к первому адресу
  const handleRouteToAddress1 = () => {
    // Первый адрес - Буденного 138/1
    window.open("https://maps.app.goo.gl/yr2zgvURcmarEdy69");
  };

  // Функция для прокладки маршрута ко второму адресу
  const handleRouteToAddress2 = () => {
    // Второй адрес - Токтогула 211
    window.open("https://maps.app.goo.gl/jWpXM1CfgEPBBKEv9");
  };

  return (
    <div className="container">
      <div className="carta_ofic">
        <div className="text_infor">
          <h1>Контактная информация</h1>
          <br />
          <br />
          <p>Место работы магазина:</p>
          <br />
          <div className="bish">
            <h4>
              г. Бишкек, улица Буденного 138/1 <br />
            </h4>
            <div className="bishk">
              <h4>улица Токтогула 211</h4>
            </div>
          </div>
          <br />
          <div className="bishkek">
            <h2>Время работы магазина:</h2>
            <h4>
              Понедельник 09:00 - 20:00 <br /> Вторник 09:00 - 20:00 <br />
              Среда 09:00 - 20:00 <br />
              Четверг 09:00 - 20:00 <br /> Пятница 09:00 - 20:00 <br /> Суббота
              09:00 - 20:00 <br />
              Воскресенье 09:00 - 20:00
            </h4>
          </div>
          <h2>Контактный телефон</h2>
          <div className="nom">
            <h4>+ 996 700 99 19 23</h4>
          </div>
          <br />
          <h2>Электронная почта</h2>
        </div>
        <div className="carta">
          <div className="carta_tx">
            <h1>Местоположение</h1>
          </div>
          <br />
          <br />
          <div className="carta_img">
            <button onClick={handleRouteToAddress1}>ПРОЛОЖИТЬ МАРШРУТ</button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2786.298869849778!2d74.63901329391784!3d42.88698461870914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb79e25e85af3%3A0x56e0a874e396988c!2zMTM4INGD0LsuINCR0YPQtNC10L3QvdC-0LPQviwg0JHQuNGI0LrQtdC6!5e1!3m2!1sru!2skg!4v1719229919693!5m2!1sru!2skg"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <div className="txt_icon_cart">
            <div className="carta_img_mest"></div>
            <p>Буденного 138/1</p>
          </div>
          <br />
          <div className="carta_img">
            <button onClick={handleRouteToAddress2}>ПРОЛОЖИТЬ МАРШРУТ</button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2786.925068508212!2d74.58183514617771!3d42.87311943939024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8232dfe7211%3A0x34d333e7a4627103!2zMjExINGD0LsuINCi0L7QutGC0L7Qs9GD0LvQsCwg0JHQuNGI0LrQtdC6IDcyMDAxMA!5e1!3m2!1sru!2skg!4v1719229631162!5m2!1sru!2skg"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <div className="txt_icon_cart">
            <div className="carta_img_mest"></div>
            <p>Токтогула 211</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
