import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Home from "../screens/Home/index.js";
import List from "../screens/List/index.js";
import { useDispatch, useSelector } from "react-redux";
import { requestListBooks } from "../redux/books/index.js";
import HeaderList from "../components/headerList/index.js";
import Detail from "../screens/Details/index.js";

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#fff",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestListBooks("*"));
  }, []);

  return (
    <NavigationContainer>
      <HeaderList />
      <Stack.Navigator mode="card" initialRouteName="List">
        <Stack.Screen name="Home" options={defaultOptions} component={Home} />
        <Stack.Screen name="List" options={defaultOptions} component={List} />
        <Stack.Screen
          name="Detail"
          options={defaultOptions}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
