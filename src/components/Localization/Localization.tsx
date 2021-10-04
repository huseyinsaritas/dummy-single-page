/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Icon } from "rsuite";
import { languages } from "../../constants/languages";
import { setLanguage } from "../../redux/action/user";
import "./Localization.scss";

type Props = {
  currentLanguage: string;
};

export const Localization: React.FC<Props> = ({ currentLanguage }) => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const onSelect = (value: string) => {
    localStorage.setItem("i18nextLng", value);
    dispatch(setLanguage(value));
    i18n.changeLanguage(value);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">
        {currentLanguage.toUpperCase()} <Icon icon="down" />
      </button>
      <div className="dropdown-content">
        {languages.map((language) => (
          <a key={language.key} onClick={() => onSelect(language.key)}>
            {language.value}
          </a>
        ))}
      </div>
    </div>
  );
};
