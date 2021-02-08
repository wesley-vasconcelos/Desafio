import React, { useState } from "react";
import DefaultText from "../defaltText/index.js";
import { Container, FixRow, Input } from "./style";
import { formatedText } from "../../../utils/utils.js";
import { Feather } from "@expo/vector-icons";
import { Line } from "../line/index.js";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { requestListBooks } from "../../redux/books/index.js";
import { useNavigation } from "@react-navigation/native";

const HeaderList = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  return (
    <Container>
      <FixRow>
        <Feather onPress={goBack} name="arrow-left" size={24} color="black" />
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
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Feather
            name={show ? "chevron-up" : "search"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </FixRow>
      {show && (
        <Input
          returnKeyType="search"
          placeholder="Digite o nome do livro"
          onSubmitEditing={(e) =>
            dispatch(requestListBooks(e.nativeEvent.text))
          }
        />
      )}
    </Container>
  );
};

export default HeaderList;
