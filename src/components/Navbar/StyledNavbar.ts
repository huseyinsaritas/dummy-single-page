import styled from "styled-components";

export const StyledNavbar = styled.div`
  background-color: #1a1d24;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 1.25rem;
    color: #fff;
    cursor: pointer;
  }

  .navbar-left-side {
    display: flex;
  }

  .breadcrumb {
    font-size: 0.75rem;
    padding: 1.25rem 0;
    min-width: 5rem;
  }
`;
