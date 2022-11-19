import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Amber700 } from "../utils/Colors";

const PostCard = ({ pfPicture, pfName, pfLastname, text, image, timeAgo }) => {
  const [liked, setLiked] = useState(false);
  const iconLike = liked ? "heart" : "heart-outline";
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <View className="w-full items-center bg-pink-200 border-pink-300 border-t-4 border-b-4 mt-4">
      <View className="w-full flex-row items-center justify-start p-2 pl-2">
        <Image className="w-14 h-14 rounded-full" source={{ uri: pfPicture }} />
        <View className="flex flex-col items-start h-full">
          <Text className="text-lg ml-2">
            {pfName} {pfLastname}
          </Text>
          <Text className="text-xs ml-2 text-gray-500 italic font-bold">
            {timeAgo} mins ago
          </Text>
        </View>
      </View>
      <View className="border-t-2 border-pink-300 w-[90%]"></View>
      <View className="flex flex-col mt-4 w-full">
        <Text className="text-base ml-2 mr-2 mb-4">{text}</Text>
        <Image
          className="w-full h-60 mb-2"
          //   className="w-full h-60"
          source={{ uri: image }}
          style={{ resizeMode: "cover" }}
        />
      </View>
      <View className="border-t-2 border-pink-300 w-full"></View>
      <View className="flex-row justify-evenly w-full mb-4">
        <TouchableOpacity
          className="flex flex-row items-center justify-center mt-2"
          onPress={() => handleLike()}
        >
          <Ionicons name={iconLike} size={24} color={Amber700} />
          <Text className="text-base ml-2 text-amber-700 font-bold">Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center justify-center mt-2"
          onPress={() => alert("You want to comment this post")}
        >
          <FontAwesome name="comments-o" size={22} color={Amber700} />
          <Text className="text-base ml-2 text-amber-700 font-bold">
            Comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;
