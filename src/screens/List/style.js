import styled, { css } from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.whitePure};
  align-items: center;
`;

export const Product = styled.View`
  flex: 0.5;
  background-color: ${(g) => g.theme.color.button.primary};
  align-items: center;
  flex-direction: row;
  width: 100%;

`;