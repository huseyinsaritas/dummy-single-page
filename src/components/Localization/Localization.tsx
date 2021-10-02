import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "rsuite";
import { languages } from "../../constants/languages";
import { setLanguage } from "../../redux/action/user";
import { UserState } from "../../redux/model/user";

type Props = {
  currentLanguage: string;
};

export const Localization: React.FC<Props> = ({ currentLanguage }) => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const language = useSelector((state: UserState) => state.language);

  const onSelect = (value: string) => {
    localStorage.setItem("i18nextLng", value);
    dispatch(setLanguage(value));
    i18n.changeLanguage(value);
  };

  return (
    <Dropdown trigger="hover" activeKey={language} title={currentLanguage.toUpperCase()}>
      {languages.map((language) => (
        <Dropdown.Item key={language.key} onSelect={() => onSelect(language.key)}>
          {language.value}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
