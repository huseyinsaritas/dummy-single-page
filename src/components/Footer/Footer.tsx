import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <span>{t("allrightsReserved")}</span>
    </div>
  );
};
