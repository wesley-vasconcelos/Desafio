import styled, { css } from "styled-components";

export const Container = styled.View`
  background-color: ${(g) => g.theme.color.button.primary};
  align-items: center;
  width: 100%;
  padding: 25px 0 0;
`;

export const FixRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${40};
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #fff;
  padding: 10px;
  border-radius: 12px;
  margin-top: 15px;
`;
