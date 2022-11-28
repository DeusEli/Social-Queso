import React from "react";
import { View, Text, TextInput } from "react-native";

const PostInput = ({ ...rest }) => {
  return (
    <TextInput
      className="justify-center items-center w-[90%] text-2xl text-center"
      placeholder="Tell your friends something..."
      multiline={true}
      numberOfLines={4}
      autoCorrect={false}
      {...rest}
    ></TextInput>
  );
};

export default PostInput;
