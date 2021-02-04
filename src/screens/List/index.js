import React from "react";
import { useSelector } from "react-redux";
import * as Styled from "./style";

const List = ({ navigation }) => {
  const {
    books: { list },
  } = useSelector((value) => value);

  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};

export default List;
