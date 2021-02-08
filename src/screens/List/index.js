import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import HeaderList from "../../components/headerList";
import * as Styled from "./style";

const List = ({ navigation }) => {
  const {
    books: { list, loading },
  } = useSelector((value) => value);
  return (
    <Styled.Container center={loading}>
      <HeaderList />

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
          <Styled.List>
            {list.map((item, index) => (
              <Styled.Product
                onPress={() => navigation.navigate("Detail", { data: item })}
              >
                <Styled.Image
                  source={{
                    uri: item?.volumeInfo?.imageLinks?.thumbnail,
                  }}
                />
              </Styled.Product>
            ))}
          </Styled.List>
        )}
    </Styled.Container>
  );
};

export default List;
