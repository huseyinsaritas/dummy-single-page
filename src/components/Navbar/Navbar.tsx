import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Icon, Nav, Navbar } from "rsuite";
import { ROUTE_PATH } from "../../enum/ROUTE_PATH";
import i18n from "../../i18n";
import { setLanguage, setUser } from "../../redux/action/user";
import { UserState } from "../../redux/model/user";
import { Localization } from "../Localization/Localization";
import { LoginModal } from "../LoginModal/LoginModal";
import { LogOut } from "../LogOut/LogOut";

export const MainNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<ROUTE_PATH>(ROUTE_PATH.HOME);

  const { t } = useTranslation();
  const history = useHistory();
  const user = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();

  const languageStore = localStorage.getItem("i18nextLng");

  useEffect(() => {
    const userStore = localStorage.getItem("user");
    const userInfo = userStore && JSON.parse(userStore);

    if (userInfo) dispatch(setUser({ name: userInfo.username, email: userInfo.email }));

    if (languageStore !== null) {
      dispatch(setLanguage(languageStore));
      i18n.changeLanguage(languageStore);
    }
  }, [dispatch, languageStore]);

  return (
    <>
      <LoginModal show={showModal} close={() => setShowModal(false)} />
      <Navbar>
        <Nav
          onSelect={(eventKey: any) => {
            setSelectedTab(eventKey);
          }}
          activeKey={selectedTab}
        >
          <Nav.Item
            eventKey={ROUTE_PATH.HOME}
            icon={<Icon icon="home" />}
            onClick={() => {
              history.push(ROUTE_PATH.HOME);
            }}
          >
            {t("home")}
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item
            eventKey={ROUTE_PATH.CONTACT}
            icon={<Icon icon="envelope" />}
            onClick={() => {
              history.push(ROUTE_PATH.CONTACT);
            }}
          >
            {t("contactUs")}
          </Nav.Item>

          <Localization currentLanguage={languageStore || ""} />
          {user ? (
            <LogOut />
          ) : (
            <Nav.Item eventKey="3" icon={<Icon icon="sign-in" />} onSelect={() => setShowModal(true)}>
              {/* <Button onClick={() => setShowModal(true)} appearance="primary">
          {t("login")}
        </Button> */}
              {t("login")}
            </Nav.Item>
          )}
        </Nav>
      </Navbar>
    </>
  );
};
