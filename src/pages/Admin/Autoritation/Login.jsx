import React, { useState } from "react";
// import amin from "../../../assets/images/Group.png";
import { useNavigate } from "react-router-dom";
import { Alert, CircularProgress, Switch } from "@mui/material";
import axios from "axios";

const LogIn = ({
  onLogin,
  setPost,
  setChangePassword,
  loading,
  setLoading,
  setUserId,
}) => {
  const init = {
    username: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState(init);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://16.171.26.64/api/auth/login/",
        valueInput
      );
      setUserId(response.data.user.pk);
      onLogin(response.data.access);
      setLoading(true);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
      setValueInput(init);
    }
  };

  console.log(loading);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div className="registers">
          {/* <img src={amin} alt="" /> */}
          <div className="login">
            <div className="login__header--left"></div>
            <div className="login__center--top">
              {error && <Alert severity="error">{error}</Alert>}
              <h1>Войти</h1>
            </div>
            <div className="login__center--input">
              <h5>старый аккаунт</h5>
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
                  name="password"
                  value={valueInput.password}
                  type="password"
                  placeholder="Пароль"
                  required
                />
              </div>
              <div className="center--verify">
                <h4>
                  <span>
                    <Switch />
                  </span>
                  Запомнить
                </h4>
                <h4 onClick={() => setChangePassword(true)}>Забыли пароль?</h4>
              </div>
              <button onClick={handleSubmit}>войти</button>
            </div>
            <div className="login__center--bottom">
              <h1>
                Если вы не зарегистрированы нажмите{" "}
                <span onClick={() => setPost(false)}>Регистрация</span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
