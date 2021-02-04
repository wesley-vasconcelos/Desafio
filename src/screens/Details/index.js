import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View  } from "react-native";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { handleFavorites } from "../../redux/books";
import DefaultText from "../../components/defaltText";
import Button from "../../components/button";
import theme from "../../../theme";

const Detail = ({ route }) => {
  const book = route?.params?.data;
  const dispatch = useDispatch();
  const {
    books: { favorites },
  } = useSelector((value) => value);

  const favorited = favorites.find((i) => i === book.id);
console.log('book', book);
  return (
    <Styled.Container>
      <Styled.Details>

      <Styled.infoBooks>

      <Image
        style={{ width: "60%", height: 150 }}
        source={{ uri: book?.volumeInfo?.imageLinks?.thumbnail }}
        />
        <DefaultText
            align="left"
            mBottom={5}
            width={25}
            mLeft={10}
            text={book.volumeInfo.pageCount + " " + 'pages'}
            themeColor="TextBlack"
            type="label"
            />

        </Styled.infoBooks>
        <Styled.infoBooks>
        <DefaultText
            align="left"
            mBottom={5}
            width={60}
            text={book.volumeInfo.title}
            themeColor="TextBlack"
            type="title1"
            />
             <DefaultText
            align="left"
            mBottom={5}
            width={60}
            text={'by' + book.volumeInfo.authors}
            themeColor="TextBlack"
            type="label"
            />
      <Styled.Buttons>
      <DefaultText
            align="left"
            mBottom={5}
            width={20}
            text={'by' }
            themeColor="TextBlack"
            type="title2"
            />

        <TouchableOpacity onPress={() => dispatch(handleFavorites(book.id))}>
        <AntDesign
          name={favorited ? "heart" : "hearto"}
          size={24}
          color="black"
          />
      </TouchableOpacity>
          </Styled.Buttons>
      <Styled.Buttons>
      <Button
        background={theme.color.primary}
        color={theme.color.whitePure}
        text="Buy"
        radius="ball"
        width={30}
        mTop={30}
        mLeft={20}

        bold
        align="center"
        type="body"
      />
       <Button
        background="secundaryRed"
        color={theme.color.whitePure}
        // text="Buy"
        radius="ball"
        heart
        width={14}
        mTop={30}
        mLeft={60}
        bold
        align="center"
        type="body"
      />
      </Styled.Buttons>
        </Styled.infoBooks>

          </Styled.Details>


   
    </Styled.Container>
  );
};

export default Detail;
