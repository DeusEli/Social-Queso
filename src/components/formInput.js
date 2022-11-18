import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Pink500, Pink300 } from "../utils/Colors";

const FormInput = ({ iconType, labelValue, placeholderText, ...rest }) => {
  return (
    <View className="flex-row w-2/3 justify-center mt-4">
      <View className="border p-2 border-pink-500">
        <AntDesign name={iconType} size={25} color={Pink500} />
      </View>
      <TextInput
        className="border p-2 w-full border-l-0 border-pink-300 rounded-r-lg text-pink-700"
        // className="border p-2 w-full border-l-0 border-pink-300 rounded-r-lg text-amber-500"
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={Pink300}
        {...rest}
      ></TextInput>
    </View>
  );
};

export default FormInput;
