import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectBox } from "../../components/SelectBox/SelectBox";
import { countryList } from "../../constants/countries";
import { ROUTE_PATH_TITLE } from "../../enum/ROUTE_PATH_TITLE";
import { emailFormatValid, passwordFormatValid, phoneNumberFormatValid } from "../../helper";
import "./ContactUs.css";

enum WARNING_MESSAGE {
  NAME_EMPTY = "Name cant be empty!",
  EMAIL_EMPTY = "Email cant be empty!",
  EMAIL_VALID = "Email format is not valid!",
  PHONE_VALID = "Phone number format is not valid!",
  PASSWORD_VALID = "Password needs to be at least 8 character long and must include an lowercase and uppercase letter and a number!",
}

export const ContactUs = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "", country: "", description: "" });
  const [warningMessage, setWarningMessage] = useState<string | undefined>(undefined);

  const { t } = useTranslation();

  document.title = ROUTE_PATH_TITLE.CONTACT;

  const isValid = () => {
    const emailValid = emailFormatValid(user.email);
    const passwordValid = passwordFormatValid(user.password);
    const phoneNumberValid = phoneNumberFormatValid(user.phone);
    let newWarningMessage = "";

    if (user.name === "") {
      newWarningMessage = WARNING_MESSAGE.NAME_EMPTY;
    } else if (user.email === "") {
      newWarningMessage = WARNING_MESSAGE.EMAIL_EMPTY;
    } else if (!emailValid) {
      newWarningMessage = WARNING_MESSAGE.EMAIL_VALID;
    } else if (!phoneNumberValid) {
      newWarningMessage = WARNING_MESSAGE.PHONE_VALID;
    } else if (!passwordValid || user.password === "") {
      newWarningMessage = WARNING_MESSAGE.PASSWORD_VALID;
    }

    setWarningMessage(newWarningMessage);

    return newWarningMessage === "";
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    if (isValid()) {
      setWarningMessage("");
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <>
      <form className="contact-container">
        <h3 className="contact-header">{t("contactUs")}</h3>
        <div className="form-group">
          <label htmlFor="name" className="control-label">
            {t("name")}
          </label>
          <div className="control-wrapper">
            <input
              name="name"
              id="name"
              type="text"
              className="form-input"
              value={user.name}
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, name: event.target.value })}
            />
            {warningMessage === WARNING_MESSAGE.NAME_EMPTY ? <span className="warning-message">{WARNING_MESSAGE.NAME_EMPTY}</span> : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="control-label">
            {t("email")}
          </label>
          <div className="control-wrapper">
            <input
              name="email"
              id="email"
              type="email"
              className="form-input"
              value={user.email}
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: event.target.value })}
            />
            {warningMessage === WARNING_MESSAGE.EMAIL_EMPTY ? <span className="warning-message">{WARNING_MESSAGE.EMAIL_EMPTY}</span> : null}
            {warningMessage === WARNING_MESSAGE.EMAIL_VALID ? <span className="warning-message">{WARNING_MESSAGE.EMAIL_VALID}</span> : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="control-label">
            {t("phone")}
          </label>
          <div className="control-wrapper">
            <input
              name="phone"
              id="phone"
              type="tel"
              className="form-input"
              value={user.phone}
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, phone: event.target.value })}
            />
            {warningMessage === WARNING_MESSAGE.PHONE_VALID ? <span className="warning-message">{WARNING_MESSAGE.PHONE_VALID}</span> : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="control-label">
            {t("password")}
          </label>
          <div className="control-wrapper">
            <input
              name="password"
              id="password"
              type="password"
              className="form-input"
              value={user.password}
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: event.target.value })}
            />
            {warningMessage === WARNING_MESSAGE.PASSWORD_VALID ? <span className="warning-message">{WARNING_MESSAGE.PASSWORD_VALID}</span> : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            {t("country")}
          </label>
          <SelectBox options={countryList()} onSelect={(option) => setUser({ ...user, country: option.name })} />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="control-label">
            {t("description")}
          </label>
          <textarea className="form-input" name="description" id="description" rows={3} onChange={(event) => setUser({ ...user, description: event.target.value })} />
        </div>

        <div className="form-button-group">
          <button className="btn-submit" onClick={handleSubmit}>
            {t("submit")}
          </button>
          <button className="btn-cancel">{t("cancel")}</button>
        </div>
      </form>
    </>
  );
};
