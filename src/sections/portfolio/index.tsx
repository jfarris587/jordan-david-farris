import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { portfolio } from "../../data";
import ProjectHeader from "./project-header";
import { Image, Heading } from "./styles";

const Portfolio = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    function handleResize() {
      setisMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {isMobile ? (
        <Mobile></Mobile>
      ) : (
        <Row className="row">
          <div className="col-12 col-lg-6">
            {portfolio.map(({ id, ...restProps }, i) =>
              i % 2 === 0 ? (
                <ProjectHeader key={i} {...restProps} />
              ) : (
                <Image key={i} src={`./images/${id}-desktop.png`} />
              )
            )}
          </div>
          <div className="col-12 col-lg-6">
            {portfolio.map(({ id, ...restProps }, i) =>
              i % 2 === 1 ? (
                <ProjectHeader key={i} {...restProps} />
              ) : (
                <Image key={i} src={`./images/${id}-desktop.png`} />
              )
            )}
          </div>
        </Row>
      )}
    </Container>
  );
};

const Mobile = () => (
  <Row className="row">
    <div className="col-12" style={{ paddingTop: "8rem" }}>
      {portfolio.map(({ id, ...restProps }, i) => (
        <>
          <ProjectHeader key={i} {...restProps} />

          <Image key={i} src={`./images/${id}-desktop.png`} />
        </>
      ))}
    </div>
  </Row>
);

const Container = styled.div`
  margin: 0 auto;
  max-width: 1350px;

  @media (max-width: 992px) {
    margin: 0;
  }
`;

const Row = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  > div {
    padding: 0 5.75rem;
    display: flex;
    flex-direction: column;
    margin: 0;

    &:first-of-type {
      ${Heading}:first-of-type {
        margin-top: 3rem;
      }
    }

    &:last-of-type {
      img:first-of-type {
        margin-top: 3rem;
      }
    }

    @media (max-width: 992px) {
      padding: 0;
      margin: 1rem 0;
    }
  }
`;

// export default Spinner(Portfolio);

export default Portfolio;
