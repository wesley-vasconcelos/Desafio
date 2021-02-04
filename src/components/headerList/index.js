import React, { useState } from "react";
import DefaultText from "../defaltText/index.js";
import { Container, FixRow } from "./style";
import { formatedText } from "../../../utils/utils.js";
import { Feather } from "@expo/vector-icons";
import { Line } from "../line/index.js";
import { View } from "react-native";

const HeaderList = () => {
  return (
    <Container>
      <FixRow>
        <Feather name="arrow-left" size={24} color="black" />
        <View>
          <DefaultText
            align="center"
            mBottom={5}
            width={75}
            mLeft={10}
            text={formatedText("Design Books", 12)}
            themeColor="TextBlack"
            type="title2"
          />
          <Line mLeft={10} align="center" width={40} />
        </View>

        <Feather name="search" size={24} color="black" />
      </FixRow>
    </Container>
  );
};

export default HeaderList;
