import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";

const Spinner = (Component: FC) =>
  function Comp() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 900);
      return () => clearTimeout(timer);
    }, []);

    if (loading) return <StyledSpinner />;

    return <Component />;
  };

const StyledSpinner = styled.div`
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 3px solid #e14761; /* Blue */
  border-radius: 50%;
  width: 90px;
  height: 90px;
  align-self: center;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
