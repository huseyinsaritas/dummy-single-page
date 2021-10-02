import React from "react";
import { ROUTE_PATH_TITLE } from "../../enum/ROUTE_PATH_TITLE";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  document.title = ROUTE_PATH_TITLE.HOME;

  return (
    <div className="home-page-container">
      <h3 className="home-page-header">{t("home")}</h3>
    </div>
  );
};
