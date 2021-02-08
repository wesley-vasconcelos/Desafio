import React, { useState } from "react";
import { Text, Image } from "react-native";
import Button from "../../components/button";
import DefaultText from "../../components/defaltText";
import HeaderHome from "../../components/headerHome";
import { Container } from "./style";

const Home = ({ navigation }) => {
  return (
    <>
      <HeaderHome />
      <Container>
        <DefaultText
          align="center"
          mBottom={70}
          mTop={70}
          width={70}
          mLeft={10}
          text={'Um livro é um brinquedo feito com letras. Ler é brincar!'}
          themeColor="TextBlack"
          type="title1"
        />
        <Image source={require('../../assets/images/leitura.png')} />


        <Button
          background="secundaryRed"
          onPress={() => navigation.navigate("List")}
          color="whitePure"
          text="ver mais"
          radius="ball"
          width={85}
          mTop={70}
          bold
          align="center"
          type="body"
        />


      </Container>
    </>
  );
};

export default Home;
