import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
let mainColor = "#db7093",
  mainAlphaColor80 = "#db709380";
const setTransitionTime = (time) => `all ${time} ease-in-out`;
const fadeIn = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;
const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.color};
  color: ${({ color }) => color};
  color: ${({ color }) => color || "#000"};
  background-color: ${mainColor};
  transition: ${setTransitionTime(" 0.5s")};
  animation: ${fadeIn} 5s ease-out;
  ${({ isButton }) =>
    isButton &&
    css`
      margin: auto;
      max-width: 50%;
      border-radius: 0.25rem;
      cursor: pointer;
    `}
  &:hover {
    background-color: ${mainAlphaColor80};
    transition: ${setTransitionTime(" 0.5s")};
  }
`;
const light = {
  color: "#333",
  bgColor: "#DDD",
};
const dark = {
  color: "#DDD",
  bgColor: "#333",
};
const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;
//herencia
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`;
const GlobalStyle = createGlobalStyle`
h2{
  padding:2rem;
  color:#61dafb;
  text-transform: uppercase;
}
`;
export default function ComponentesEstilizados() {
  return (
    <>
      <GlobalStyle />
      <h2>Styled-Components</h2>
      <MyH3>Hola soy un h3 estilizado con Styled-Components</MyH3>
      <MyH3 color="#61dafb">
        Hola soy un h3 estilizado con Styled-Components
      </MyH3>
      <MyH3 isButton>Soy un h3 estilizado como boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja redondeada light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
