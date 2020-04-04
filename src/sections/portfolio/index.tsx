import React, { FC } from "react";
import styled from "styled-components";
import Spinner from "../../components/spinner";
import { portfolio } from "../../data";
import ProjectHeader from "./project-header";
import { Image } from "./styles";

const Portfolio = () => {
  return (
    <Container>
      <Row className="row">
        <div className="col-12 col-lg-6" style={{ paddingTop: "8rem" }}>
          {portfolio.map(({ id, ...restProps }, i) =>
            i % 2 === 0 ? (
              <ProjectHeader {...restProps} />
            ) : (
              <Image src={`./images/${id}-desktop.png`} />
            )
          )}
        </div>
        <div className="col-12 col-lg-6">
          {portfolio.map(({ id, ...restProps }, i) =>
            i % 2 === 1 ? (
              <ProjectHeader {...restProps} />
            ) : (
              <Image src={`./images/${id}-desktop.png`} />
            )
          )}
        </div>
      </Row>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem auto 0 auto;
  max-width: 1350px;

  @media (max-width: 767px) {
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
    margin: 3rem 0;

    @media (max-width: 767px) {
      padding: 0;
      margin: 1rem 0;
    }
  }
`;

// export default Spinner(Portfolio);

export default Portfolio;
