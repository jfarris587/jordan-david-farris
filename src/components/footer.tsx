import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2020</p>
      <Icons>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-instagram"></i>
      </Icons>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.05rem 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    padding: 0.05rem 0.25rem;
  }

  p {
    opacity: 0.5;
    font-size: 0.85rem;
  }
`;

const Icons = styled.div`
  i {
    padding: 0 0.5rem;
    opacity: 0.5;
    font-size: 1.3rem;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Footer;
