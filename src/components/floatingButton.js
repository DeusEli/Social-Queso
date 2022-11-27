import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { Pink500, Amber600 } from "../utils/Colors";

//const FloatingButton = () => {
const FloatingButton = ({ takePhotoFromCamera, choosePhotoFromLibrary }) => {
  const [pop, setPop] = useState(false);
  const [icon_1] = useState(new Animated.Value(0));
  const [icon_2] = useState(new Animated.Value(0));
  const [icon_3] = useState(new Animated.Value(0));
  const [btnColor, setBtnColor] = useState(Pink500);
  const [btnIcon, setBtnIcon] = useState("md-add");

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: -110,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(icon_2, {
      toValue: -90,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(icon_3, {
      toValue: -110,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setBtnColor(Amber600);
    setBtnIcon("close");
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(icon_2, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(icon_3, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setBtnColor(Pink500);
    setBtnIcon("md-add");
  };
  return (
    <>
      <Animated.View className="absolute bottom-[30.5] right-[30]">
        <TouchableOpacity
          className="bg-amber-500 w-[60px] h-[60px]  rounded-full justify-center items-center pb-1 pr-1"
          onPress={() => takePhotoFromCamera()}
          style={[{ translateY: icon_1 }, styles.shadow]}
        >
          <MaterialIcons name="add-a-photo" size={30} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View className="absolute bottom-[30.5] right-[30]">
        <TouchableOpacity
          className="bg-amber-500 w-[60px] h-[60px] rounded-full justify-center items-center"
          onPress={() => choosePhotoFromLibrary()}
          style={[{ translateY: icon_2, translateX: icon_2 }, styles.shadow]}
        >
          <MaterialIcons name="add-photo-alternate" size={30} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View className="absolute bottom-[30.5] right-[30]">
        <TouchableOpacity
          className="bg-amber-500 w-[60px] h-[60px] rounded-full justify-center items-center"
          onPress={() => alert("Open nothing but looks good")}
          style={[{ translateX: icon_3 }, styles.shadow]}
        >
          <AntDesign name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        className="shadow-xl w-[60px] h-[60px] absolute bottom-[30] right-[30] rounded-full justify-center items-center"
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
        style={[
          {
            backgroundColor: btnColor,
          },
          styles.shadow,
        ]}
      >
        <Ionicons name={btnIcon} size={35} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
