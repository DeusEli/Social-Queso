import React, { useContext, useState } from "react";
import PostInput from "../components/postInput";
import { View, Image, Text, Alert, ActivityIndicator } from "react-native";
import FloatingButton from "../components/floatingButton";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import storage from "@react-native-firebase/storage";
import { Pink300 } from "../utils/Colors";

const AddPost = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

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

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log("Image Url: ", imageUrl);
  };

  const uploadImage = async () => {
    setUploading(true);
    setTransferred(0);
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);
    const extension = filename.split(".").pop();
    const name = filename.split(".").slice(0, -1).join(".");
    filename = name + Date.now() + "." + extension;

    const storageReference = storage().ref("photos/" + filename);
    const task = storageReference.putFile(uploadUri);

    task.on("state_changed", (taskSnapshot) => {
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100
      );
    });

    try {
      await task;

      const url = await storageReference.getDownloadURL();

      setUploading(false);
      Alert.alert("Success", "Post uploaded successfully");
      setImage(null);
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <View className="flex-1 items-center w-full h-full bg-pink-50">
      <Image source={{ uri: image }} className="w-full h-60" />
      <PostInput />
      {uploading ? (
        <View className="flex-1 items-center justify-center">
          <Text>{transferred} % Completed!</Text>
          <ActivityIndicator size="large" color={Pink300} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={submitPost}
          className="bg-pink-200 px-4 py-2 rounded-full mt-4"
        >
          <Text className="text-2xl font-bold text-pink-500">Post</Text>
        </TouchableOpacity>
      )}
      <FloatingButton
        TakePhotoFromCamera={takePhotoFromCamera}
        ChoosePhotoFromLibrary={choosePhotoFromLibrary}
      />
    </View>
  );
};

export default AddPost;
