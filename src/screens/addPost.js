import React, { useContext, useState } from "react";
import PostInput from "../components/postInput";
import { View, Image, Text } from "react-native";
import FloatingButton from "../components/floatingButton";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddPost = () => {
  const [image, setImage] = useState(null);

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    //alert(image);
  };

  const takePhotoFromCamera = async () => {
    // alert("You want to choose a photo from library");
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="flex-1 items-center w-full h-full bg-pink-50">
      <Image source={{ uri: image }} className="w-full h-60" />
      <PostInput />
      <TouchableOpacity
        onPress={() => alert("Posted")}
        className="bg-pink-200 px-4 py-2 rounded-full mt-4"
      >
        <Text className="text-2xl font-bold text-pink-500">Post</Text>
      </TouchableOpacity>
      <FloatingButton
        takePhotoFromCamera={takePhotoFromCamera}
        choosePhotoFromLibrary={choosePhotoFromLibrary}
      />
    </View>
  );
};

export default AddPost;
