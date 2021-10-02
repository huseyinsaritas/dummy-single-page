import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "rsuite";
import { logout } from "../../redux/action/user";
import { UserState } from "../../redux/model/user";

export const LogOut = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);

  const logOut = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <Dropdown trigger="click" title={user?.name}>
      {/* {user?.name} */}
      <Dropdown.Item onClick={logOut}>{t("logout")}</Dropdown.Item>
    </Dropdown>
  );
};
