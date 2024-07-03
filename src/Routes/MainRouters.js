import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/admin";
import Register from "../pages/Admin/Autoritation/Register";
import LogIn from "../pages/Admin/Autoritation/Login";
import NewPassword from "../pages/Admin/ChangePassword/NewPassword";
import Gaming from "../pages/PagesPC/GamingPC/Gaming";
import Powerful from "../pages/PagesPC/PowerfulPC/Powerful";
import AboutOffic from "../pages/PagesContact/AboutUs/AboutOffic";
import Basket from "../pages/Basket/Basket";
import Pay from "../pages/Pay/Pay";

const MainRouters = () => {
  const [userId, setUserId] = useState(null);

  const ADMIN = [
    {
      id: 1,
      link: "/admin",
      element: <Admin setUserId={setUserId} />,
    },
    {
      id: 2,
      link: "/register",
      element: <Register setUserId={setUserId} />,
    },
    {
      id: 3,
      link: "/login",
      element: <LogIn setUserId={setUserId} />,
    },
    {
      id: 4,
      link: "/newPassword",
      element: <NewPassword />,
    },
    {
      id: 5,
      link: "/navonas",
      element: <AboutOffic userId={userId} />,
    },
    // { link: "/", element: <Home />, id: 1 },
  ];

  const PUBLIC = [
    { path: "/gaming", element: <Gaming /> },
    { path: "/powerful", element: <Powerful /> },
    { path: "/basket", element: <Basket /> },
    { path: "/pay", element: <Pay /> },
  ];

  return (
    <Routes>
      {ADMIN.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
      {PUBLIC.map((el, idx) => (
        <Route path={el.path} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRouters;
