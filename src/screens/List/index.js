import React, { useState } from "react";
import { View } from "react-native";
import DefaultText from "../../components/defaltText";
import HeaderList from "../../components/headerList";
import { Container, Product } from "./style";



const List = () => {
  return (
    <Container>
        <HeaderList />
        <Product>
          <View></View>
          <View>
          <DefaultText
          align="right"
          mBottom={5}
          width={75}
          mLeft={10}
          text={'Logo Design Love:'}
          themeColor="TextBlack"
          type="title2"
        />

          </View>

        </Product>
    
    </Container>
  );
};

export default List;
