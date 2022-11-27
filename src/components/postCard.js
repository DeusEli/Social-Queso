import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Amber700 } from "../utils/Colors";

const PostCard = ({ Props }) => {
  const [liked, setLiked] = useState(false);
  const iconLike = liked ? "heart" : "heart-outline";
  let textLike = Props.likes === 1 ? "Like" : "Likes";
  let textComment = Props.comments === 1 ? "Comment" : "Comments";
  // let textLike = "Likes";
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <View className="w-full items-center bg-pink-100 border-pink-200 border-t-none border-b-4 mt-4">
      <View className="w-full flex-row items-center justify-start p-2 pl-2">
        <Image
          className="w-14 h-14 rounded-full"
          source={{ uri: Props.pfPicture }}
        />
        <View className="flex flex-col items-start h-full">
          <Text className="text-lg ml-2">
            {Props.pfName} {Props.pfLastname}
          </Text>
          <Text className="text-xs ml-2 text-gray-500 italic font-bold">
            {Props.timeAgo} mins ago
          </Text>
        </View>
      </View>
      <View className="border-t-2 border-pink-200 w-[90%]"></View>
      <View className="flex flex-col mt-4 w-full">
        <Text className="text-base ml-2 mr-2 mb-4">{Props.text}</Text>
        {Props.image == "" ? null : (
          <Image
            className="w-full h-60 mb-2"
            source={{ uri: Props.image }}
            style={{ resizeMode: "cover" }}
          />
        )}
      </View>
      <View className="border-t-2 border-pink-200 w-full"></View>
      <View className="flex-row justify-evenly w-full mb-4">
        <TouchableOpacity
          className="flex flex-row items-center justify-center mt-2"
          onPress={() => handleLike()}
        >
          <Ionicons name={iconLike} size={24} color={Amber700} />
          <Text className="text-base ml-2 text-amber-700 font-bold">
            {Props.likes + " " + textLike}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center justify-center mt-2"
          onPress={() => alert("You want to comment this post")}
        >
          <FontAwesome name="comments-o" size={22} color={Amber700} />
          <Text className="text-base ml-2 text-amber-700 font-bold">
            {Props.comments + " " + textComment}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;
