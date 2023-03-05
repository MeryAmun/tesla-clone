import React from "react";
import { downArrow, downArrow2 } from "../../assets";
import { ButtonGroup,Buttons, DownArrow, ItemText, LeftButton, RightButton, Wrap } from "./styles";

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Other Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
      <DownArrow srr={downArrow}/>
      </Buttons>
    </Wrap>
  );
};

export default Section;
