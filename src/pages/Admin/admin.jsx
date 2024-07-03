import React, { useState } from "react";
import Cookies from "js-cookie";
import { Alert } from "@mui/material";
import "./admin.scss";
import "./adaptation.scss";
import LogIn from "./Autoritation/Login";
import Register from "./Autoritation/Register";
import PasswordReset from "./ChangePassword/ResetPassword";

const Admin = ({ setUserId }) => {
  const [post, setPost] = useState(true);
  const [changePassword, setChangePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!Cookies.get("authToken")
  );

  const handleLogout = () => {
    Cookies.remove("authToken");
    setIsAuthenticated(false);
  };

  const handleLogin = (token) => {
    Cookies.set("authToken", token, { expires: 7 });
    setIsAuthenticated(true);
    setIsHidden(true);
  };

  const handleSignup = (token) => {
    Cookies.set("authToken", token, { expires: 7 });
    setIsAuthenticated(true);
    setIsHidden(true);
  };

  return (
    <div id="bcg_img">
      <div className="container">
        <div className="bcg_img">
          {isAuthenticated ? (
            <div>
              <Alert variant="outlined" severity="success">
                Регистрация успешна!
              </Alert>
              <button onClick={handleLogout}>Выйти</button>
            </div>
          ) : (
            <div style={{ display: isHidden ? "none" : "block" }}>
              {changePassword ? (
                <PasswordReset
                  setChangePassword={setChangePassword}
                  setPost={setPost}
                />
              ) : post ? (
                <LogIn
                  setPost={setPost}
                  onLogin={handleLogin}
                  setChangePassword={setChangePassword}
                  setLoading={setLoading}
                  loading={loading}
                  setUserId={setUserId}
                />
              ) : (
                <Register
                  setPost={setPost}
                  onSignup={handleSignup}
                  setLoading={setLoading}
                  loading={loading}
                  setIsAuthenticated={setIsAuthenticated}
                  isAuthenticated={isAuthenticated}
                  setUserId={setUserId}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
