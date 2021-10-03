import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTE_PATH } from "../../../enum/ROUTE_PATH";
import i18n from "../../../i18n";
import { setLanguage, setUser } from "../../../redux/action/user";
import { UserState } from "../../../redux/model/user";
import { Localization } from "../../Localization/Localization";
import { LoginModal } from "../../LoginModal/LoginModal";
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
        <li>
          <a
            role="button"
            tabIndex={0}
            onClick={() => {
              history.push(ROUTE_PATH.HOME);
            }}
          >
            {t("home")}
          </a>
        </li>
        <li>
          <a
            role="button"
            tabIndex={0}
            onClick={() => {
              history.push(ROUTE_PATH.CONTACT);
            }}
          >
            {t("contactUs")}
          </a>
        </li>
        {user ? (
          <LogOut />
        ) : (
          <li>
            <a role="button" tabIndex={0} onClick={() => setShowModal(true)}>
              {t("login")}
            </a>
          </li>
        )}
        <li>
          <a role="button" tabIndex={0}>
            <Localization currentLanguage={languageStore || ""} />
          </a>
        </li>
      </StyledRightNav>
    </>
  );
};
