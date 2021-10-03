import React, { useState } from "react";
import { RightNav } from "../RightNav/RightNav";
import { StyledBurger } from "./StyledBurger";
// import "./Burger.scss";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {/* <div className="burger-container" onClick={() => setOpen(!open)}> */}
        <div></div>
        <div></div>
        <div></div>
        {/* </div> */}
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
