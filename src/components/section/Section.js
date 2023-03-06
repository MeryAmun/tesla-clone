import React from "react";
import { ButtonGroup,Buttons, DownArrow, ItemText, LeftButton, RightButton, Wrap } from "./styles";
import { downArrow } from "../../assets";

const Section = ({title,description,backgroundImage,leftButtonText,rightButtonText,}) => {
  return (
    <Wrap backgroundImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        {
          rightButtonText && 
          <RightButton>{rightButtonText}</RightButton>
        }
      </ButtonGroup>
      <DownArrow src={downArrow}/>
      </Buttons>
    </Wrap>
  );
};

export default Section;
