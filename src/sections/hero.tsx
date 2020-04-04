import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Spinner from "../components/spinner";

const Hero = () => {
  return (
    <Container>
      <Heading>
        {false ? (
          <>
            <i>👋</i> Hi, you found me! My name is{" "}
            <span style={{ color: "#e14761" }}>Jordan Farris</span> and I am a
            software engineer from{" "}
            <span style={{ color: "#2eb3e4" }}>Indianapolis</span>. Currently
            working to build innovative things.
          </>
        ) : (
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
            <i>👋</i> Hi, you found me! <Typist.Delay ms={800} />
            My name is <span style={{ color: "#e14761" }}>
              Jordan Farris
            </span>{" "}
            and I am a software engineer from{" "}
            <span style={{ color: "#2eb3e4" }}>Louisville</span>
            <Typist.Backspace count={10} delay={200} />
            <Typist.Delay ms={200} />
            <span style={{ color: "#2eb3e4" }}>Bloomington</span>
            <Typist.Backspace count={11} delay={200} />
            <Typist.Delay ms={200} />
            <span style={{ color: "#2eb3e4" }}>Indianapolis</span>.{" "}
            <Typist.Delay ms={200} />
            Currently working to build innovative things.
          </Typist>
        )}
      </Heading>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 10vh;
  position: relative;
  top: -25px;

  span {
    font-weight: 600;
  }

  i {
    animation-name: wave-animation;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-iteration-count: 3;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @media (max-width: 1200px) {
    font-size: 8vh;
  }

  @media (max-width: 800px) {
    font-size: 7vh;
  }

  @media (max-width: 600px) {
    font-size: 3.5vh;
  }
`;

export default Spinner(Hero);
