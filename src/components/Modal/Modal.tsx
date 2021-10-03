import React from "react";
import { useTranslation } from "react-i18next";
import Backdrop from "./Backdrop/Backdrop";
import "./Modal.scss";

type Props = {
  show: boolean;
  close: () => void;
  submit: () => void;
  backdropClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const Modal: React.FC<Props> = ({ show, close, backdropClick = () => {}, submit, children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Backdrop show={show} clicked={backdropClick} />
      <div className="modal-wrapper" style={{ opacity: show ? "1" : "0", transform: show ? "translateY(0)" : "translateY(-100vh)" }}>
        <div className="modal-header">
          <h4>{t("login")}</h4>
          <span className="modal-close-button" onClick={close}>
            x
          </span>
        </div>
        <div className="modal-content">
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="btn-submit" onClick={submit}>
              {t("submit")}
            </button>
            <button className="btn-cancel" onClick={close}>
              {t("cancel")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
