import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SocialButton = ({ buttonTitle, btnType, color, bgColor, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      className="flex-row mt-2 py-3 px-4 w-4/5 rounded-lg justify-between items-center"
      style={{ backgroundColor: bgColor }}
    >
      <View className="self-start">
        <FontAwesome name={btnType} size={25} color={color} />
      </View>
      <View className="place-self-center">
        <Text style={{ color: color }}>{buttonTitle}</Text>
      </View>
      <View></View>
    </TouchableOpacity>
  );
};

export default SocialButton;
