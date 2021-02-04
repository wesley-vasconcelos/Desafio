import styled from "styled-components";

export const Container = styled.View`
flex: 0.4;
background-color: ${(g) => g.theme.color.button.primary};
align-items: center;
`;


export const Details = styled.View`
  width: 95%;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;

`;

export const infoBooks = styled.View`
  width: 40%;
  flex-direction: column ;
  
`;

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  margin: 15px 0;

`;