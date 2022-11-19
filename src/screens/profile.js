import React, { useContext, useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { View, Text } from "react-native";
import FormButton from "../components/formButton";
import { Red500, Amber100 } from "../utils/Colors";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View className="w-full h-full items-center justify-center">
      <Text className="text-lg">Your user ID is: {user.uid}</Text>
      <FormButton
        buttonTitle="Logout"
        txtColor={Amber100}
        bgColor={Red500}
        onPress={() => logout()}
      />
    </View>
  );
};

export default Profile;
