import React from "react";
import styled from "styled-components";
import "./home.css";
import { Section } from "../index";
import { modelS } from "../../assets";

const Home = () => {
  return (
    <Container>
      <Section 
      title='Model S'
      description='Order Online for Touchless Delivery'
      backgroundImage={modelS}
      leftButtonText='Custom Order'
      rightButtonText='Existing Inventory'
      />
     
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
