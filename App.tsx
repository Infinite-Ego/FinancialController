import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import Menu from "./components/Menu";

export default function App() {
  const Post = styled.View`
    background-color: blue;
    height: 100px;
    width: 100px;
    padding: 15px;
    color: red;
  `;

  return (
    <View>
      <StatusBar animated={true} />
      <Menu />
    </View>
  );
}
