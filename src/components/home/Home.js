import React from "react";
import styled from "styled-components";
import { Section } from "../index";
import { useSelector } from "react-redux/es/exports";
import { showcaseCars } from "../../features/cars/carSlice";

const Home = () => {
  const carExhibit = useSelector(showcaseCars);
  return (
    <Container>
      {carExhibit.map(
        (
          { title, description, image, leftButtonText, rightButtonText, id },
          index
        ) => (
          <Section
            key={index}
            title={title}
            description={description}
            backgroundImage={image}
            leftButtonText={leftButtonText}
            rightButtonText={rightButtonText}
            id={id}
          />
        )
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
