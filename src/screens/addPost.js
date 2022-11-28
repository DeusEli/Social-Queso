import React, { useContext, useEffect, useState } from "react";
import PostInput from "../components/postInput";
import { View, Image, Text, Alert, ActivityIndicator } from "react-native";
import FloatingButton from "../components/floatingButton";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import { Pink300 } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../navigation/AuthProvider";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);

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
    //console.log("Image Url: ", imageUrl);
    firestore()
      .collection("posts")
      .add({
        user_id: user.uid,
        post: post,
        postImg: imageUrl,
        postTime: firestore.Timestamp.fromDate(new Date()),
        likes: null,
        comments: null,
      })
      .then(() => {
        console.log("Post Added!");
        setPost(null);
        setImage(null);
        Alert.alert(
          "Post published!",
          "Your post has been published successfully!"
        );
        navigation.navigate("Social Queso");
      })
      .catch((error) => {
        console.log(
          "Something went wrong with added post to firestore.",
          error
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return "";
    }
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
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <View className="flex-1 items-center w-full h-full bg-pink-50">
      <Image source={{ uri: image }} className="w-full h-60" />
      <PostInput onChangeText={(content) => setPost(content)} />
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
