import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen, ProfileScreen } from "../src/screens";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    // <Stack.Navigator initialRouteName="Home">
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="Profile" component={ProfileScreen} />
    // </Stack.Navigator>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
