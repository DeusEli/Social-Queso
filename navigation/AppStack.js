import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProfileScreen } from "../src/screens";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
