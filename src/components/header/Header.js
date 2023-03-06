import React,{ useState } from 'react';
import { logo } from '../../assets';
import { BurgerNav, CloseWrapper, Container, CustomClose, CustomMenu, Menu, RightMenu } from './styles';




const Header = () => {
const [open, setOpen] = useState(false)


return (
  <Container>
    <a href="#">
      <img src={logo} alt="tesla logo" />
    </a>
    <Menu>
      <a href="#modelS">Model S</a>
      <a href="#model3">Model 3</a>
      <a href="#modelX">Model X</a>
      <a href="#modelY">Model Y</a>
    </Menu>
    <RightMenu>
    <a href="#">Shop</a>
    <a href="#">Tesla Account</a>
    <CustomMenu onClick={(prev) => !prev}/>
    </RightMenu>
    {
      open && (<BurgerNav>
      <CloseWrapper>
      <CustomClose/>
      </CloseWrapper>
      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Used Inventory</a></li>
      <li><a href="#">Trade-in</a></li>
      <li><a href="#">Cybertruck</a></li>
      <li><a href="#">Roadtrack</a></li>
      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Existing Inventory</a></li>
    </BurgerNav>)
    }
  </Container>
  )
}

export default Header