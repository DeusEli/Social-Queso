import React, { useContext, useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { View, Text } from "react-native";
import FormButton from "../components/formButton";
import { Red500, Amber100 } from "../utils/Colors";

const AddPost = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Agrega un post</Text>
    </View>
  );
};

export default AddPost;
