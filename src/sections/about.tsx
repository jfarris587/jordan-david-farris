import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Spinner from "../components/spinner";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Heading>
            <Typist
              startDelay={1000}
              stdTypingDelay={0}
              avgTypingDelay={50}
              cursor={{
                show: true,
                blink: true,
                hideWhenDone: true,
                hideWhenDoneDelay: 700,
              }}
            >
              My <br /> Experience
            </Typist>
          </Heading>
        </div>
        <Grid>
          <Item>
            <h3>Digital Management LLC (DMI)</h3>
            <h4>November 2018 - Present</h4>
            <p>
              <span>Software Engineer - </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              laudantium adipisci quo facere repellat placeat temporibus aperiam
              eaque provident, quae ipsum maxime cupiditate id minus itaque
              sapiente magni officiis odio!
            </p>
          </Item>
          <Item>
            <h3>GP Strategies</h3>
            <h4>May 2018 - November 2018</h4>
            <p>
              <span>Web Developer - </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              laudantium adipisci quo facere repellat placeat temporibus aperiam
              eaque provident, quae ipsum maxime cupiditate id minus itaque
              sapiente magni officiis odio!
            </p>
          </Item>
          <Item>
            <h3>Indiana University (Bloomington)</h3>
            <h4>January 2017 - May 2018</h4>
            <p>
              <span>Undergraduate Instructor - </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              laudantium adipisci quo facere repellat placeat temporibus aperiam
              eaque provident, quae ipsum maxime cupiditate id minus itaque
              sapiente magni officiis odio!
            </p>
          </Item>
        </Grid>
      </Wrapper>

      <Heading
        style={{ margin: "4rem 0", fontSize: "1.75rem", textAlign: "center" }}
      >
        Want to work together?{" "}
        <a href="#" style={{ color: "#e14761" }}>
          Contact me!
        </a>
      </Heading>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  max-width: 1050px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  > * {
    width: 50%;
    display: inline-flex;
    flex-direction: column;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;

  @media (max-width: 992px) {
    margin-top: 3rem;
  }
`;

const Grid = styled.div``;

const Item = styled.div`
  padding: 2.75rem 0;

  @media (max-width: 992px) {
    padding: 1.75rem 0;
  }

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  h4 {
    font-weight: 500;
    font-size: 0.95rem;
    opacity: 0.5;
    margin-top: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

export default Spinner(About);
