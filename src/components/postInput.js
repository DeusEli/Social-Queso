import React from "react";
import { View, Text, TextInput } from "react-native";

const PostInput = () => {
  return (
    <TextInput
      className="justify-center items-center w-[90%] text-2xl text-center"
      placeholder="Tell your friends something..."
      multiline={true}
      numberOfLines={4}
      autoCorrect={false}
    ></TextInput>
  );
};

export default PostInput;
