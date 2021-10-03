import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/action/user";
import { Modal } from "../Modal/Modal";
import "./Login.scss";

type Props = {
  show: boolean;
  close: () => void;
};

export const LoginModal: React.FC<Props> = ({ show, close }) => {
  const [loginFormData, setLoginFormData] = useState({ username: "", email: "", password: "" });
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const userLogin = () => {
    localStorage.setItem("user", JSON.stringify(loginFormData));
    dispatch(setUser({ name: loginFormData.username, email: loginFormData.email }));
    close();
  };

  return (
    <Modal show={show} close={close} submit={userLogin}>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="control-label">
            {t("username")}
          </label>
          <div className="control-wrapper">
            <input
              name="username"
              id="username"
              type="text"
              className="form-input"
              value={loginFormData.username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLoginFormData({ ...loginFormData, username: event.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="control-label">
            {t("email")}
          </label>
          <div className="control-wrapper">
            <input
              name="email"
              id="email"
              type="email"
              className="form-input"
              value={loginFormData.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLoginFormData({ ...loginFormData, email: event.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="control-label">
            {t("password")}
          </label>
          <div className="control-wrapper">
            <input
              name="password"
              id="password"
              type="password"
              className="form-input"
              value={loginFormData.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLoginFormData({ ...loginFormData, password: event.target.value })}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};
