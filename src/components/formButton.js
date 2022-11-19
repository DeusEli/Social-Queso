import React from "react";
import { Text, TouchableOpacity } from "react-native";

const FormButton = ({ buttonTitle, txtColor, bgColor, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      className="mt-4 py-2 w-4/5 rounded-lg items-center"
      style={{ backgroundColor: bgColor }}
    >
      <Text className="text-lg font-bold" style={{ color: txtColor }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
