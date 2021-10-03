import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import { Icon } from "rsuite";
import { ROUTE_PATH } from "../../enum/ROUTE_PATH";
import { Burger } from "./Burger/Burger";
import { StyledNavbar } from "./StyledNavbar";

export const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();

  const findBreadCrumb = () => {
    const appLocation = location.pathname;
    if (appLocation === ROUTE_PATH.HOME) {
      return <span>/{t("home")}</span>;
    }
    if (appLocation === ROUTE_PATH.CONTACT) {
      return <span>/{t("contactUs")}</span>;
    }
  };

  return (
    <StyledNavbar>
      <div className="navbar-left-side">
        <div className="logo" onClick={() => history.push(ROUTE_PATH.HOME)}>
          <Icon icon="tripadvisor" size="lg" />
        </div>
        <div className="breadcrumb">{findBreadCrumb()}</div>
      </div>
      <Burger />
    </StyledNavbar>
  );
};
