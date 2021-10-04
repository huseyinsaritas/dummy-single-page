/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTE_PATH } from "../../../enum/ROUTE_PATH";
import i18n from "../../../i18n";
import { setLanguage, setUser } from "../../../redux/action/user";
import { UserState } from "../../../redux/model/user";
import { Localization } from "../../Localization/Localization";
import { LoginModal } from "../../Login/Login";
import { LogOut } from "../../LogOut/LogOut";
import { StyledRightNav } from "./StyledRightNav";

type Props = {
  open: boolean;
};

export const RightNav: React.FC<Props> = ({ open }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<ROUTE_PATH>(ROUTE_PATH.HOME);

  const { t } = useTranslation();
  const history = useHistory();

  const languageStore = localStorage.getItem("i18nextLng");
  const user = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let unmounted = false;
    let unregisterCallback: () => void;
    if (!unmounted) {
      //init tab selection
      setSelectedTab(history.location.pathname as ROUTE_PATH);
      unregisterCallback = history.listen((location) => {
        setSelectedTab(location.pathname as ROUTE_PATH);
      });
    }
    return () => {
      unmounted = true;
      if (unregisterCallback) unregisterCallback();
    };
  }, [history]);

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
      <StyledRightNav open={open}>
        <li
          onClick={() => {
            history.push(ROUTE_PATH.HOME);
          }}
          className={`${selectedTab === ROUTE_PATH.HOME && "active"}`}
        >
          <a rel="noopener noreferrer" role="button">
            {t("home")}
          </a>
        </li>
        <li
          onClick={() => {
            history.push(ROUTE_PATH.CONTACT);
          }}
          className={`${selectedTab === ROUTE_PATH.CONTACT && "active"}`}
        >
          <a rel="noopener noreferrer" role="button">
            {t("contactUs")}
          </a>
        </li>

        <Localization currentLanguage={languageStore || ""} />

        {user ? (
          <LogOut />
        ) : (
          <li onClick={() => setShowModal(true)}>
            <a rel="noopener noreferrer" role="button">
              {t("login")}
            </a>
          </li>
        )}
      </StyledRightNav>
    </>
  );
};
