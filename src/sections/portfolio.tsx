import React from "react";
import styled from "styled-components";
import Spinner from "../components/spinner";
import { portfolio } from "../data";

const Portfolio = () => {
  return (
    <Container>
      {portfolio.map(({ name, type, id, icons, description, color }, i) => (
        <Row
          className="row"
          style={{ flexDirection: i % 2 == 0 ? "row" : "row-reverse" }}
        >
          <div className="col-12 col-lg-6">
            <a href="#" style={{ textDecoration: "none", color: "#000" }}>
              <Heading style={{ margin: "0" }} color={color}>
                {name}
              </Heading>
            </a>
            <p style={{ marginBottom: "3rem" }}>{type}</p>
            <img src={`./images/${id}-desktop.png`} />
          </div>
          <div className="col-12 col-lg-6">
            <IconWrapper>
              {icons.map((icon) => (
                <Icon className={icon} />
              ))}
            </IconWrapper>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
            <img
              style={{ maxWidth: "310px" }}
              src={`./images/${id}-mobile.png`}
            />
          </div>
        </Row>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem auto 0 auto;
  max-width: 1350px;

  @media (max-width: 767px) {
    margin: 0;
  }

  img {
    width: 100%;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
    margin: 0 auto;
  }
`;

const Row = styled.div`
  width: 100%;
  margin: 0 auto;
  > div {
    padding: 0 5.75rem;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;

    @media (max-width: 767px) {
      padding: 0;
      margin: 1rem 0;
    }

    p {
      padding: 0 0.5rem;
      opacity: 0.5;
    }
  }
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;

  width: fit-content;
  padding: 0.25rem 0.5rem;
  margin-top: 20rem;

  background: none;
  transition: all 0.2s cubic-bezier(0.86, 0, 0.07, 1);
  background: ${({ color }) => `linear-gradient(${color}, ${color});`};
  background-size: 0 100%;
  background-position: 0 0;
  background-repeat: no-repeat;

  &:hover {
    color: white;
    background-size: 100% 100%;
  }
`;

const Description = styled.p`
  margin-bottom: 3rem;

  @media (max-width: 767px) {
    padding: 0;
    margin: 1rem 0 2rem 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

const Icon = styled(({ className }: { className: string }) => (
  <i className={className} />
))`
  display: flex;
  font-size: 1.75rem;
  color: rgba(0, 0, 0, 0.2);
  padding: 0 0.25rem;

  &::before {
    margin: 0 auto;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export default Spinner(Portfolio);
