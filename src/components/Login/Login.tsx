import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ControlLabel, Form, FormControl, FormGroup } from "rsuite";
import { login } from "../../redux/action/user";
import { Modal } from "../Modal/Modal";
import "./Login.scss";

type Props = {
  show: boolean;
  close: () => void;
};

export const LoginModal: React.FC<Props> = ({ show, close }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const userLogin = () => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(login({ name: user.username, email: user.email }));
    close();
  };

  return (
    <Modal show={show} close={close} submit={userLogin}>
      <Form fluid>
        <FormGroup controlId="name-1">
          <ControlLabel>{t("username")}</ControlLabel>
          <FormControl name="name" value={user.username} onChange={(value: string) => setUser({ ...user, username: value })} />
        </FormGroup>
        <FormGroup controlId="email-1">
          <ControlLabel>{t("email")}</ControlLabel>
          <FormControl name="email" type="email" value={user.email} onChange={(value: string) => setUser({ ...user, email: value })} />
        </FormGroup>
        <FormGroup controlId="password-1">
          <ControlLabel>{t("password")}</ControlLabel>
          <FormControl name="password" type="password" value={user.password} onChange={(value: string) => setUser({ ...user, password: value })} />
        </FormGroup>
      </Form>
    </Modal>
  );
};
