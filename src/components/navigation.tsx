import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Header>
      <a href="#">
        <img src="./images/profile.jpg"></img>
      </a>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
      </ul>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;

  @media (max-width: 992px) {
    padding: 0.5rem 0.25rem;
  }

  /* animation: 15s ease 0s normal forwards 1 fadein; */
  opacity: 1;

  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;

    opacity: 0.85;
    &:hover {
      opacity: 1;
    }
  }

  ul {
    li {
      display: inline;
      padding: 0 1rem;
      @media (max-width: 992px) {
        padding: 0 0.35rem;
      }

      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.2);
        font-size: 1.15rem;
        font-weight: 400;

        @media (max-width: 992px) {
          font-size: 1rem;
        }

        &:hover {
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
  }
`;

export default Navigation;
