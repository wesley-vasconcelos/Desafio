import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View, ScrollView } from "react-native";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { handleFavorites } from "../../redux/books";
import DefaultText from "../../components/defaltText";
import Button from "../../components/button";
import theme from "../../../theme";
import HeaderHome from "../../components/headerHome";
import HeaderList from "../../components/headerList";

const Detail = ({ route }) => {
  const book = route?.params?.data;
  const dispatch = useDispatch();
  const {
    books: { favorites },
  } = useSelector((value) => value);

  const favorited = favorites.find((i) => i === book.id);
  console.log('book', book);
  return (
    <ScrollView>
      <Styled.Container>
        <HeaderList />
        <Styled.Box>

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
                  text={'$ 9.99'}
                  themeColor="TextBlack"
                  type="title2"
                />

                <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => dispatch(handleFavorites(book.id))}>
                  {['1', '2', '3', '4', '5'].map((i => (<AntDesign
                    name={favorited ? "heart" : "hearto"}
                    size={16}
                    text={i}
                    style={{ marginTop: 7, marginLeft: 3 }}
                    color="black"
                  />)
                  ))}
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
        </Styled.Box>
      </Styled.Container>
      <DefaultText
        align="center"
        mBottom={5}
        width={100}
        text={'simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'}
        themeColor="TextBlack"
        type="title2"
      />

    </ScrollView>
  );
};

export default Detail;
