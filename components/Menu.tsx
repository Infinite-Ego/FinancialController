import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";

const MenuContainer = styled.View`
  padding: 10px;
  width: 50px;
  height: 50px;
  background-color: black;
  position: absolute;
  right: 0;
`;

const MenuLine = styled.View`
  width: 100%;
  height: 5px;
  margin: 3px 0;
  background-color: white;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </MenuContainer>
  );
};

export default Menu;
