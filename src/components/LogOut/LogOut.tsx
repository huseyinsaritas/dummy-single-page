import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "rsuite";
import { logout } from "../../redux/action/user";
import { UserState } from "../../redux/model/user";
import "./LogOut.scss";

export const LogOut = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);

  const logOut = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">
        {user?.name}
        <Icon icon="down" />
      </button>
      <div className="dropdown-content">
        <a href="#" onClick={logOut}>
          {t("logout")}
        </a>
      </div>
    </div>
  );
};
