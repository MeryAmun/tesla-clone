import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div({
  minHeight: "60px",
  position: "static",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  top: "0",
  right: "0",
  left: "0",
  zIndex: "1",
});
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 5px;
    flex-wrap: nowrap;
  }
  a:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: background 1s;
    padding: 10px 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 10px 5px;
  }
  a:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: background 1s;
    padding: 10px 5px;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  li:hover {
    background: rgba(0, 0, 0, 0.2);
    padding-left: 10px;
    transition: background 2s;
    transition: padding-left 1s;

    a {
      font-weight: 600;
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  CustomClose,
  CloseWrapper,
};
