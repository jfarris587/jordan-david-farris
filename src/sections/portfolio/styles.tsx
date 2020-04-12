import React from "react";
import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;

  width: fit-content;
  padding: 0.5rem 0.5rem;
  position: relative;
  left: -0.5rem;
  margin-top: 7rem;

  @media (max-width: 992px) {
    margin-top: 1rem;
  }

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

export const ProjectType = styled.p`
  margin: 0.5rem 0 1rem;
  opacity: 0.5;
`;

export const Description = styled.p`
  margin-bottom: 3rem;
  opacity: 0.5;

  @media (max-width: 992px) {
    padding: 0;
    margin: 1rem 0 0 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.12);
  margin: 7rem auto 0;

  @media (max-width: 992px) {
    margin: 1rem auto 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 992px) {
    margin: 0;
  }
`;

export const Icon = styled(({ className }: { className: string }) => (
  <i className={className} />
))`
  display: flex;
  font-size: 1.75rem;
  color: rgba(0, 0, 0, 0.2);
  padding: 0 0.25rem;

  &:first-of-type {
    padding: 0 0.25rem 0 0;
  }

  &::before {
    margin: 0 auto;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
