import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./App.css";
import Hero from "./sections/hero";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import About from "./sections/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./sections/portfolio/index";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Template>
          <Navigation />
          <Container>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Hero />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </Template>
      </ThemeProvider>
    </Router>
  );
};

const Template = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 3rem;

  height: 100%;
  flex: 1;
  display: flex;

  @media (max-width: 992px) {
    padding: 0 1rem;
  }

  > *:not(:first-of-type) {
    margin-bottom: 9rem;
  }
`;

export default App;
