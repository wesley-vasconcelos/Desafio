import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import Home from '../screens/Home/index.js'
import List from "../screens/List/index.js";


const Stack = createStackNavigator();

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#fff",
    },
  };






  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" initialRouteName="List">
        <Stack.Screen name="Home" options={defaultOptions} component={Home} />
        <Stack.Screen name="List" options={defaultOptions} component={List} />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
