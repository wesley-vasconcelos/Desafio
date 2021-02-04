import styled, { css } from "styled-components";

export const Container = styled.View`
  flex: 0.1;
  background-color: ${(g) => g.theme.color.button.primary};
  align-items: center;
  width: 100%;
`;
export const FixRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${40};
  


`;
