import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Input, InputPicker } from "rsuite";
import { countries } from "../../constants/countries";
import { ROUTE_PATH_TITLE } from "../../enum/ROUTE_PATH_TITLE";
import "./ContactUs.css";

export const ContactUs = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "", country: "", description: "" });
  const { t } = useTranslation();

  document.title = ROUTE_PATH_TITLE.CONTACT;

  return (
    <>
      <Form className="contact-container" fluid>
        <h3 className="contact-header">{t("contactUs")}</h3>
        <FormGroup controlId="name">
          <ControlLabel>{t("name")}</ControlLabel>
          <FormControl name="name" value={user.name} onChange={(value: string) => setUser({ ...user, name: value })} />
        </FormGroup>
        <FormGroup controlId="email">
          <ControlLabel>{t("email")}</ControlLabel>
          <FormControl name="email" type="email" value={user.email} onChange={(value: string) => setUser({ ...user, email: value })} />
        </FormGroup>
        <FormGroup controlId="phone">
          <ControlLabel>{t("phone")}</ControlLabel>
          <FormControl name="phone" value={user.phone} onChange={(value: string) => setUser({ ...user, phone: value })} />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>{t("password")}</ControlLabel>
          <FormControl name="password" type="password" autoComplete="off" value={user.password} onChange={(value: string) => setUser({ ...user, password: value })} />
        </FormGroup>
        <FormGroup controlId="country">
          <ControlLabel>{t("country")}</ControlLabel>
          <InputPicker
            labelKey="name"
            valueKey="id"
            data={countries}
            block
            value={user.country}
            onClean={() => setUser({ ...user, country: "" })}
            onSelect={(value: string) => setUser({ ...user, country: value })}
          />
        </FormGroup>

        <FormGroup controlId="textarea">
          <ControlLabel>{t("description")}</ControlLabel>
          <Input componentClass="textarea" rows={3} />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary">{t("submit")}</Button>
            <Button appearance="default">{t("cancel")}</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </>
  );
};
