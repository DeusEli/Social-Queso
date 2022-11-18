import React from "react";
import { Text, TouchableOpacity } from "react-native";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      className="mt-4 bg-amber-300 py-2 w-4/5 rounded-lg items-center"
    >
      <Text className="text-lg text-pink-600 font-bold">{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
