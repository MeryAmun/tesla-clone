import React from "react";
import styled from "styled-components";
import "./home.css";
import { Section } from "../index";

const Home = () => {
  return (
    <Container>
      <Section />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
