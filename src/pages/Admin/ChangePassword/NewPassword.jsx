import { Alert } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  code: "",
  email: "",
  new_password: "",
};

const NewPassword = ({ setChangePassword, setPost, message }) => {
  const navigate = useNavigate();
  const [valueNewPassword, setValueNewPassword] = useState(init);
  const [error, setError] = useState(false);

  const handleNewPassword = (e) => {
    setValueNewPassword({
      ...valueNewPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://16.171.26.64/api/auth/password_reset/verify/",
        valueNewPassword
      );
      setChangePassword(false);
      setPost(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <div id="new_password">
        <div className="new_password">
          <div className="new_password__header"></div>
          <h1>Изменить пароль</h1>
          {message && <Alert severity="info">{message}</Alert>}
          <div className="new_password__center--new">
            <input
              onChange={handleNewPassword}
              name="code"
              type="text"
              placeholder="code ..."
              required
            />
            <input
              onChange={handleNewPassword}
              name="email"
              type="text"
              placeholder="email ..."
              required
            />
            <input
              onChange={handleNewPassword}
              name="new_password"
              type="text"
              placeholder="new Password ..."
              required
            />
            {error && (
              <p style={{ color: "red" }}>
                Ошибка при изменении пароля. Проверьте введенные данные.
              </p>
            )}
            <button onClick={handleClick}>Изменить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
