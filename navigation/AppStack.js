import React from "react";
import { View, Icon, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { HomeScreen, ProfileScreen, AddPostScreen } from "../src/screens";
import { Pink400, Pink50 } from "../src/utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Social Queso"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Pink400,
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: Pink50,
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Image
                source={require("../assets/cheese01.png")}
                style={{ width: 32, height: 32 }}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <FontAwesome.Button
                name="plus"
                size={18}
                backgroundColor={Pink50}
                color={Pink400}
                onPress={() => navigation.navigate("Add a Post")}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Add a Post"
        component={AddPostScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Pink400,
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: Pink50,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Pink400,
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: Pink400,
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: Pink50,
            elevation: 0,
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          // headerRight: () => (
          //   <View style={{ marginRight: 10 }}>
          //     <FontAwesome.Button
          //       name="plus"
          //       size={18}
          //       backgroundColor={Pink50}
          //       color={Pink400}
          //       onPress={() => alert("This is a button!")}
          //     />
          //   </View>
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
