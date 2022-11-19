import React, { useContext, useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { View, Text } from "react-native";
import FormButton from "../components/formButton";
import { Red500, Amber100 } from "../utils/Colors";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    // <DrawerNavigator.Navigator>
    //   <DrawerNavigator.Screen name="Home" component={HomeScreen} />
    //   <DrawerNavigator.Screen name="Profile" component={ProfileScreen} />
    // </DrawerNavigator.Navigator>
    <View>
      <Text>Home Queso | Welcome {user.uid}</Text>
      <FormButton
        buttonTitle="Logout"
        txtColor={Amber100}
        bgColor={Red500}
        onPress={() => logout()}
      />
    </View>
  );
};

export default Home;
