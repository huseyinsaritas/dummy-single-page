import styled from "styled-components";

type IStyledBurger = {
  open: boolean;
};

export const StyledBurger = styled.div<IStyledBurger>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  cursor: pointer;
  z-index: 20;
  display: none;

  &:hover {
    div {
      background-color: #fff !important;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 0.625rem;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
