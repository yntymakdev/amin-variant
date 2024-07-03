import { CircularProgress, LinearProgress, Switch } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import amin from "../../../assets/images/Group.png";

const init = {
  username: "",
  email: "",
  password1: "",
  password2: "",
};

const Register = ({
  setPost,
  onSignup,
  loading,
  setLoading,
  setIsAuthenticated,
  setUserId,
}) => {
  const [valueInput, setValueInput] = useState(init);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://13.53.171.221/api/auth/registration/",
        valueInput
      );
      setUserId(response.data.user.pk);
      onSignup(response.data.access);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
      setValueInput(init);
    }
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
          <LinearProgress variant="buffer" />
        </div>
      ) : (
        <div className="registers">
          {/* <img src={amin} alt="" /> */}
          <div className="register">
            <div className="register__header--left"></div>
            <div className="register__center--top">
              <h1>Регистрация</h1>
            </div>
            <div className="register__center--input">
              <h5>Создать аккаунт</h5>
              <div className="center--input">
                <input
                  onChange={handleChange}
                  name="username"
                  value={valueInput.username}
                  type="text"
                  placeholder="имя"
                  required
                />
              </div>
              <div className="center--input">
                <input
                  onChange={handleChange}
                  name="email"
                  value={valueInput.email}
                  type="text"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="center--input">
                <input
                  onChange={handleChange}
                  name="password1"
                  value={valueInput.password1}
                  type="text"
                  placeholder="Пароль"
                  required
                />
              </div>
              <div className="center--input">
                <input
                  onChange={handleChange}
                  name="password2"
                  value={valueInput.password2}
                  type="text"
                  placeholder="Подтвердите пароль"
                  required
                />
              </div>
              <h4>
                <span>
                  <Switch />
                </span>
                Запомнить
              </h4>

              <button onClick={handleSubmit}>Зарегистрироваться</button>
            </div>
            <div className="register__center--bottom">
              <h1>
                Уже есть аккаунт?
                <span onClick={() => setPost(true)}>Войти</span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
