import styled from "styled-components";

type IStyledRightNav = {
  open: boolean;
};

export const StyledRightNav = styled.ul<IStyledRightNav>`
  display: flex;
  list-style: none;
  flex-direction: row;
  padding: 0;

  .active {
    background: #292d33;
    color: #fff;
  }

  li {
    padding: 1.25rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    height: 3.5rem;
    cursor: pointer;

    &:hover {
      background: #292d33;

      a {
        color: #fff !important;
        text-decoration: none !important;
        outline: none;
        height: 3.5rem;
      }
    }
  }

  a {
    color: #a4a9b3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    z-index: 15;
    /* transition: transform 0.3s ease-in-out; */

    li {
      color: #fff;
    }
  }
`;
