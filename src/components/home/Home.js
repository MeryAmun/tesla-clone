import React from "react";
import styled from "styled-components";
import "./home.css";
import { Section } from "../index";
import { accessories, model3, modelS, modelX, modelY, solarPanel, solarRoof } from "../../assets";
import { homeSectionData } from "../../data/dummData";


const Home = () => {
  return (
    <Container>
     {
        homeSectionData.map(({title,description,image,leftButtonText,rightButtonText,id},index) => (
            <Section 
            key={index}
            title={title}
            description={description}
            backgroundImage={image}
            leftButtonText={leftButtonText}
            rightButtonText={rightButtonText}
            id={id}
            />
        ))
     }
      {/* <Section 
      title='Model Y'
      description='Order Online for Touchless Delivery'
      backgroundImage={modelY}
      leftButtonText='Custom Order'
      rightButtonText='Existing Inventory'
      />
      <Section 
      title='Model 3'
      description='Order Online for Touchless Delivery'
      backgroundImage={model3}
      leftButtonText='Custom Order'
      rightButtonText='Existing Inventory'
      />
      <Section 
      title='Model X'
      description='Order Online for Touchless Delivery'
      backgroundImage={modelX}
      leftButtonText='Custom Order'
      rightButtonText='Existing Inventory'
      />
      <Section 
      title='Lowest Cost Solar Panel in America'
      description='Money-back guarantee'
      backgroundImage={solarPanel}
      leftButtonText='Order now'
      rightButtonText='Learn more'
      />
      <Section 
      title='Solar for New Roofs'
      description='Solar Roof Costs Less Than a New Range Rover'
      backgroundImage={solarRoof}
      leftButtonText='Order now'
      rightButtonText='Learn more'
      />
      <Section 
      title='Accessories'
      description=''
      backgroundImage={accessories}
      leftButtonText='Shop now'
      />
      */}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
