import styled, { css } from "styled-components";

export const Container = styled.View`
  background-color: ${(g) => g.theme.color.button.primary};
  flex: 1;
  align-items: center;
`;

export const List = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Product = styled.TouchableOpacity`
  width: 30%;
  height: 150px;
  margin: 15px 0;
`;

export const Image = styled.Image`
  height: 150px;
  margin: 15px 0;
`;

