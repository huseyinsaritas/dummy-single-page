import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "rsuite";
import "./SelectBox.scss";

type Option = {
  id: string;
  name: string;
};

type Props = {
  options: Option[];
  onSelect: (option: Option) => void;
};

export const SelectBox: React.FC<Props> = ({ options, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>();
  const { t } = useTranslation();

  const toggleDropdown = () => setOpen(!open);

  const handleItemClick = (option: Option) => {
    selectedItem === option.id ? setSelectedItem(undefined) : setSelectedItem(option.id);
    onSelect(option);
    setOpen(false);
  };

  const selectedOption = options.find((option) => option.id === selectedItem)?.name;

  return (
    <div className="selectbox-container">
      <div className="selectbox-header" onClick={toggleDropdown}>
        {selectedItem ? (
          <a href="javascript:void(0)" rel="noopener noreferrer" className="selected-item">
            {selectedOption}
          </a>
        ) : (
          <span>{t("country")}</span>
        )}
        <div className="select-right">
          {selectedItem ? (
            <span
              className="toggle-clean"
              onClick={() => {
                setSelectedItem(undefined);
              }}
            >
              x
            </span>
          ) : null}
          <Icon icon="down" className={`icon ${open && "open"}`} />
        </div>
      </div>
      <div className={`selectbox-body ${open && "open"}`}>
        {options.map((option, index) => (
          <div key={index} className="selectbox-item" onClick={() => handleItemClick(option)} id={option.id}>
            <a href="javascript:void(0)" rel="noopener noreferrer" className="selectbox-select-item">
              {option.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
