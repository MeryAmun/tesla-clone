import React from "react";
import {
  ButtonGroup,
  Buttons,
  DownArrow,
  ItemText,
  LeftButton,
  RightButton,
  Wrap,
} from "./styles";
import { downArrow } from "../../assets";
import { Fade, Bounce } from "react-reveal";

const Section = ({
  title,
  description,
  backgroundImage,
  leftButtonText,
  rightButtonText,
  id,
}) => {
  return (
    <Wrap backgroundImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1 id={id}>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Bounce>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Bounce>
        <DownArrow src={downArrow} />
      </Buttons>
    </Wrap>
  );
};

export default Section;
