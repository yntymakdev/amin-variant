import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import NewPassword from "./NewPassword";

const PasswordReset = ({ setChangePassword, setPost }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [reset, setReset] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setMessage("Письмо для сброса пароля отправлено на ваш email.");
      setReset(true);
      const response = await axios.post(
        "http://16.171.26.64/api/auth/password_reset/",
        { email }
      );
      setMessage("Письмо для сброса пароля отправлено на ваш email.");
      setReset(true);
    } catch (error) {
      setMessage("Произошла ошибка. Пожалуйста, попробуйте снова.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="change">
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
        </div>
      ) : (
        <>
          <div
            style={{ display: reset ? "none" : "flex" }}
            className="change__reset--teg"
          >
            <form onSubmit={handleSubmit}>
              <h2>Сброс пароля</h2>

              <input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Отправить</button>
            </form>
            <button
              onClick={() => {
                setChangePassword(false);
                setPost(true);
              }}
            >
              Назад
            </button>
          </div>
          <div style={{ display: reset ? "block" : "none" }}>
            <NewPassword message={message} />
          </div>
        </>
      )}
    </div>
  );
};

export default PasswordReset;
