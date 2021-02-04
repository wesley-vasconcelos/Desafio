import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import HeaderHome from "../components/headerHome";
import HeaderList from "../components/headerList";

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#fff",
    },
  };




const Home = () => {
    return <HeaderHome />
}

  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" initialRouteName="Initial">
        <Stack.Screen name="Home" options={defaultOptions} component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
