import React, { useState } from "react";
import { logo } from "../../assets";
import {
  CloseWrapper,
  Container,
  BurgerNav,
  CustomClose,
  CustomMenu,
  Menu,
  RightMenu,
} from "./styles";
import { selectCars } from "../../features/cars/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#shop">
        <img src={logo} alt="tesla logo" />
      </a>
      <Menu>
        {cars?.map(({ name, link }, index) => (
          <a href={link} key={index}>
            {name}
          </a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#shop">Shop</a>
        <a href="#shop">Tesla Account</a>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>
      <BurgerNav show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        {cars?.map(({ name, link }, index) => (
          <li key={index}>
            <a href={link}>{name}</a>
          </li>
        ))}
        <li>
          <a href="#shop">Existing Inventory</a>
        </li>
        <li>
          <a href="#shop">Used Inventory</a>
        </li>
        <li>
          <a href="#shop">Trade-in</a>
        </li>
        <li>
          <a href="#shop">Cybertruck</a>
        </li>
        <li>
          <a href="#shop">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
